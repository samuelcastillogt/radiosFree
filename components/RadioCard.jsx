
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { contants } from '../constans';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSQLiteContext } from 'expo-sqlite/next';
export default function RadioCard(props) {
    const [favorite, setFavorite] = useState(false);
    const db = useSQLiteContext();
    async function getAllfavorites() {
       try {
       const firstRow = await db.getAllAsync('SELECT * FROM favorite')
       const result = firstRow.filter((item)=> item.idRadio == props.radio.id)
       if(result.length > 0){
        setFavorite(true)
       }
          
       } catch (error) {
           console.log(error)
       }
     }
     const saveFavorite = async()=>{
      await db.runAsync(`INSERT INTO favorite (idRadio) VALUES (?)`, props.radio.id)        
      setFavorite(true)
    }
    const deleteFavorite = async()=>{
      try {
        await db.runAsync('DELETE FROM favorite WHERE idRadio = $value', props.radio.id)
        setFavorite(false)   
      } catch (error) {
          console.log(error)
      }          
  }
   useEffect(() => {
     getAllfavorites();
   }, []);
    const {radio, setRadio} = props
    return (
      
        <TouchableHighlight onPress={()=> setRadio(radio)} >
           <View style={styles.container}>
          <Image 
            source={{
              uri: radio.data.imagen
            }}
            style={styles.img}
          />
          <View style={styles.titleCard}>
            <Text style={styles.title}>{radio.data.nombre}</Text> 
          </View>
          {
            favorite ? <AntDesign name="star" size={30} color="white" onPress={deleteFavorite}/> : <AntDesign name="staro" size={30} color="white" onPress={saveFavorite}/>
          }
          
          
            {/* </View> */}
            
        </View> 
        </TouchableHighlight>
        
    );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 100,
    backgroundColor: "#2c3d61",
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 30,
    display:"flex",
    flexDirection: "row"
  },
  square: {
    alignSelf: 'center',
    shadowColor: 'black',
  },
  title:{
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  img:{
    width: 75,
    height: 75,
    overflow: "hidden",
    borderRadius: 100
  },
  titleCard:{
    padding: 10
  }
});
