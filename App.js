import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { dataService } from './services/data.service';
import RadioCard from './components/RadioCard';
import Player from './components/Player';

export default function App() {
const [radios, setRadios] = useState()
const [radio, setRadio] = useState()
  const getData = async()=>{
  const response = await dataService.getAllData()
  if(response.data){
    setRadios(response.data)
  }
}  
  useEffect(()=>{
    if(radios == undefined){
      getData()
    }
    
  },[])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working</Text>
      {
        radios == undefined && <ActivityIndicator />
      }
      {
        radios != undefined && radios.map(item => <RadioCard radio={item} key={item.id} setRadio={setRadio}/>)
      }
      {
        radio != undefined && <Player radio={radios} setRadio={setRadio}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
