import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableHighlight } from 'react-native'
import React, {useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import { contants } from '../constans'
import { dataService } from '../services/data.service'
import { SET_RADIOS } from '../redux/slices/radios.slice'
const categorias = ["Todas",
                "Rock",
                "Varios", 
                "Recuerdo"]
const Home = ({navigation}) => {
    const radios = useSelector(state => state.radios.radios)
    const dispatch = useDispatch()
    const getData = async()=>{
        const response = await dataService.getAllData()
        if(response.data){
            dispatch(SET_RADIOS(response.data))
        }
      }
      useEffect(()=>{
        if(radios.length == 0 ){
          getData()
        }
        
      },[])
  return (
    <View style={styles.container}>
        {/* <Banner /> */}
        <View style={styles.categorieContainer}>
        <TouchableHighlight onPress={()=> navigation.navigate("Radios", {filtro: undefined})} style={styles.image}>
       <ImageBackground source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTvTGHVhi_njsRy3XPtIRqlxRwwEgtkQgFkLP1KhpQnYK8afdxTRiAlK6QcxiS81FZ9U&usqp=CAU"}}
                       resizeMode='cover'
                        style={styles.image}
      >
        <Text style={styles.name}>Todas</Text>
      </ImageBackground>           
        </TouchableHighlight>
        <View style={styles.carrusel}>
          <TouchableHighlight onPress={()=> navigation.navigate("Radios", {filtro: "rock"}) } style={styles.secondaryImage}>
       <ImageBackground source={{uri: "https://www.shutterstock.com/shutterstock/videos/26717464/thumb/1.jpg?ip=x480"}}
                       resizeMode='cover'
                        style={styles.secondaryImage}
      >
        <Text style={styles.name}>Rock</Text>
      </ImageBackground>           
        </TouchableHighlight>   
        <TouchableHighlight onPress={()=> navigation.navigate("Radios", {filtro: "varios"})} style={styles.secondaryImage}>
       <ImageBackground source={{uri: "https://stemwomen.eu/wp-content/uploads/2021/05/podcast.jpg"}}
                       resizeMode='cover'
                        style={styles.secondaryImage}
      >
        <Text style={styles.name}>Variedad</Text>
      </ImageBackground>           
        </TouchableHighlight>
        <TouchableHighlight onPress={()=> navigation.navigate("Radios", {filtro: "recuerdo"})} style={styles.secondaryImage}>
       <ImageBackground source={{uri: "https://images.telediario.mx/ST8A6o51L564CpPUwaZt-o-lIes=/345x215/uploads/media/2023/04/22/persona-revisando-vinilos-de-musica.jpg"}}
                       resizeMode='cover'
                        style={styles.secondaryImage}
      >
        <Text style={styles.name}>Recuerdo</Text>
      </ImageBackground>
                 
        </TouchableHighlight> 
        <TouchableHighlight onPress={()=> navigation.navigate("Radios", {filtro: "catolica"})} style={styles.secondaryImage}>
       <ImageBackground source={{uri: "https://es.la-croix.com/images/1000/que-sucede-en-la-misa.jpeg"}}
                       resizeMode='cover'
                        style={styles.secondaryImage}
      >
        <Text style={styles.name}>Catolicas</Text>
      </ImageBackground>
                 
        </TouchableHighlight>    
        </View>

        </View>
       
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
        backgroundColor: contants.bodyBackground,
    },
    image: {
        height: 200,
        width: 350,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        borderRadius: 20,
        overflow: "hidden",
        padding: 10
    },
    secondaryImage:{
        height: 100,
        width: 150,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        borderRadius: 20,
        overflow: "hidden",
        padding: 10
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    categorieContainer:{
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    carrusel:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    }
})