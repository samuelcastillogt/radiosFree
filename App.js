import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { dataService } from './services/data.service';
import RadioCard from './components/RadioCard';
import Player from './components/Player';
import { contants } from './constans';
import Banner from './components/Banner';

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
      
      { radio == undefined ?
        <>
        <Banner />
        {
        radios == undefined && <ActivityIndicator size="large"/>
      }
      {
        radios != undefined && <FlatList 
                                  horizontal
                                  data={radios}
                                  renderItem={(item) => <RadioCard radio={item.item} setRadio={setRadio}/>}
                                  keyExtractor={(item) => item.id}
                                />
      }
        </> : <Player radio={radio} setRadio={setRadio}/>
       
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: contants.bodyBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

});
