

import { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableHighlight, Dimensions, ScrollView, StatusBar } from 'react-native';
import PrincipalRadio from '../components/PrincipalRadio';
import { dataService } from '../services/data.service';
import { Audio } from 'expo-av';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
export default function Home() {
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [radio, setRadio] = useState(undefined)
  const [sound, setSound] = useState();
  const [filter, setFilter] = useState(undefined)
  const getData = async()=>{
    const response = await dataService.getAllData()
    if(response.data.length == 0){
    }else{
      setData(response.data)
      setLoading(false)
    }
  }
  async function playSound() {
  setLoading(true)
  try{
    await Audio.setAudioModeAsync({
      staysActiveInBackground: true,
    });
  const { sound } = await Audio.Sound.createAsync({uri: radio.url});
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
  setLoading(false)      
  }catch(err){alert("Ha ocurrido un error :( Ya estamos trabajando para solucionarlo")}

}
const stopSound = ()=>{
  setSound(undefined)
  setRadio(undefined)
}
  useEffect(()=>{
    getData()
  },[])

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  useEffect(()=>{
    if(radio != undefined){
      playSound()
    }

  }, [radio])
  const dd = data.filter((i) => i.data.categoria == filter)
  console.log(dd)
  return (
    <View style={styles.container}>
        <View style={{
            width: Dimensions.get("screen").width,
            paddingTop: StatusBar.currentHeight,
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Image style={{width: 200, height: 100}}     source={require("../assets/Radio.png")}/>
        </View>
               
      <View style={styles.filtersContainer}>
        <Text style={styles.h2}>Categorias</Text>
        <View style={styles.optionsContainer}>
          <ScrollView horizontal={true} style={{padding: 0, width: "100%"}}>
          <TouchableHighlight 
              style={styles.option}
              onPress={()=> setFilter(undefined)}>
              <Text style={styles.optionText}>Todas</Text>
            </TouchableHighlight>
          <TouchableHighlight 
              style={styles.option}
              onPress={()=> setFilter("rock")}
            >
              <Text style={styles.optionText}>Rock</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              style={styles.option}
              onPress={()=> setFilter("recuerdo")}
            >
              <Text style={styles.optionText}>Recuerdo</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              style={styles.option}
              onPress={()=> setFilter("catolica")}
            >
              <Text style={styles.optionText}>Catolicas</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              style={styles.option}
              onPress={()=> setFilter("varios")}
            >
              <Text style={styles.optionText}>Varios</Text>
            </TouchableHighlight>
          </ScrollView>
          
        </View>
      </View>
      <ScrollView style={{height: 200}}>
      {
        data != undefined && data.length > 0 && filter == undefined && data.map((i) => <PrincipalRadio radio={i} key={i.id} selectRadio={setRadio}/>
        || <Text style={{color: "white", textAlign: "center"}}>No hay radios disponibles</Text>
        )
      }
            {
            data != undefined && data.length > 0 && filter != undefined && data.filter((i) => i.data.categoria == filter).map(i => <PrincipalRadio radio={i} key={i.id} selectRadio={setRadio}/>) 
        || <Text style={{color: "white", textAlign: "center"}}>No hay radios disponibles</Text>
      }
      </ScrollView>
      {
        radio != undefined  && <View style={styles.player}>

        <Image source={{uri: radio.imagen}} style={{width: 50, height: 50}}/>
        <Text style={{color: "white"}}>{radio.nombre}</Text>
        <TouchableHighlight onPress={stopSound}>
        <FontAwesome name="stop" size={30} color="white" style={{marginRight: 10}}/>
        </TouchableHighlight>
        

      </View>

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#191b27",
    position: "relative",
    height: Dimensions.get("screen").height,
    paddingTop: StatusBar.currentHeight,
  },
  h2:{
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginLeft: 10
  },
  filtersContainer:{
    padding: 0,
    marginBottom: 10
  },
  optionsContainer:{
    width: Dimensions.get("screen").width,
  },
  option:{
    backgroundColor: "#f5f5f8",
    padding: 10,
    borderRadius: 20,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  optionText:{
    fontWeight: "bold"
  },
  player:{
    height: 80,
    backgroundColor: "rgba(44, 61, 97, 0.2)",
    position: "fixed",
    bottom: 0,
    width: Dimensions.get("screen").width,
    zIndex: 99999,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10
  }
});
