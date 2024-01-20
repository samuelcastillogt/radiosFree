import { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Text, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { contants } from '../constans';
export default function Player(props) {
  const {radio, setRadio} = props
  const {url, nombre} = radio.data
  const [sound, setSound] = useState();
  const [loading, setLoading] = useState(false)
  async function playSound() {
    console.log('Loading Sound');
    setLoading(true)
    try{
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
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
      <Text style={styles.title}>{nombre}</Text>
      <View style={styles.control}>
         {
        sound == undefined && loading == false && <AntDesign name="play" size={30} color={contants.color} onPress={playSound}/>
      }
       {
        loading == true && <ActivityIndicator size="large"/>
       } 
       {
        sound != undefined && <FontAwesome name="stop" size={24} color={contants.color} onPress={stopSound}/>
       }
      </View>
     
        
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    width: "100%",
    padding: 20
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
    textAlign: "center"
  }
})