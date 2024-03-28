import { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { contants } from '../constans';
export default function Player(props) {
  const {radio, setRadio} = props
  const {url, nombre, imagen} = radio.data
  const [sound, setSound] = useState();
  const [loading, setLoading] = useState(false)
  async function playSound() {
    console.log('Loading Sound');
    setLoading(true)
    try{
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
      });
    const { sound } = await Audio.Sound.createAsync({uri: url});
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
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={styles.container}>
      <AntDesign name="closecircle" size={30} color={"#5ea935"} style={styles.closeIcon} onPress={stopSound}/>
      <Image 
        source={{
          uri: imagen
        }}
        style={styles.img}
      />
      <Text style={styles.title}>{nombre}</Text>
      <View style={styles.control}>
         {
        sound == undefined && loading == false && <AntDesign name="play" size={100} color={"#3ff1dd"} onPress={playSound}/>
      }
       {
        loading == true && <ActivityIndicator size="large"/>
       } 
       {
        sound != undefined && loading == false && <FontAwesome name="stop" size={100} color={contants.color} onPress={stopSound}/>
       }
      </View>
     
        
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    width: "99%",
    backgroundColor: "#001b46",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    borderRadius: 20,
    elevation: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3ff1dd"
  },
  control:{
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: 20
  },
  img:{
    width: "120%",
    height: 200,
    position: "absolute",
    top: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  closeIcon:{
    position: "absolute",
    top: -20,
    margin: 10,
    left: -20,
    zIndex: 999
  }

})