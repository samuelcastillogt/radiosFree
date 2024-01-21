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
    }catch(err){console.log(err)}

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
      <AntDesign name="closecircle" size={24} color={contants.color} style={styles.closeIcon} onPress={stopSound}/>
      <Image 
        source={{
          uri: imagen
        }}
        style={styles.img}
      />
      <Text style={styles.title}>{nombre}</Text>
      <View style={styles.control}>
         {
        sound == undefined && loading == false && <AntDesign name="play" size={100} color={contants.color} onPress={playSound}/>
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
    backgroundColor: contants.cardBackground,
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
    color: contants.color
  },
  control:{
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: 20
  },
  img:{
    width: 200,
    height: 200,
    shadowColor: "black",
    shadowOffset: 20
  },
  closeIcon:{
    position: "absolute",
    top: 0,
    margin: 10,
    left: 5,
    zIndex: 999
  }

})