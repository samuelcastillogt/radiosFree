
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, StatusBar } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { dataService } from './services/data.service';
import RadioCard from './components/RadioCard';
import Player from './components/Player';
import { contants } from './constans';
import Banner from './components/Banner';

export default function App() {
const [radios, setRadios] = useState()
const [radio, setRadio] = useState()
const [filtro, setFiltro] = useState("all")
const [filtrada, setFiltrada] = useState([])
  const getData = async()=>{
  const response = await dataService.getAllData()
  if(response.data){
    setRadios(response.data)
  }
}
useEffect(()=>{
  if(filtro != "all"){
    const data = radios.filter(item => item.data.categoria == filtro)
    setFiltrada(data)
  }else{
    setFiltrada([])
  }
  
  
},[filtro])
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
        <View style={styles.filtro}>
          <Text style={styles.title}>Filtra por categoria</Text>
        <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => setFiltro(value)}
            items={[
                { label: 'Todas', value: 'all' },
                { label: 'Rock', value: 'rock' },
                { label: 'Varios', value: 'varios' },
                { label: 'Recuerdo', value: 'recuerdo' },
            ]}
        />          
        </View>

        {
        radios == undefined && <ActivityIndicator size="large"/>
      }
      {
        radios != undefined && filtro == "all" && <FlatList 
                                  data={radios}
                                  renderItem={(item) => <RadioCard radio={item.item} setRadio={setRadio}/>}
                                  keyExtractor={(item) => item.id}
                                />|| <FlatList 
                                data={filtrada}
                                renderItem={(item) => <RadioCard radio={item.item} setRadio={setRadio}/>}
                                keyExtractor={(item) => item.id}
                                style={{marginTop: 10}}
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
    padding: 20,
  },
  filtro:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    color: contants.color,
    fontWeight: "bold",
    fontSize: 25
  }
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30,
    margin: 20 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 15,
    color: 'white',
    backgroundColor: contants.color,
    paddingRight: 30,
    margin: 20 // to ensure the text is never behind the icon
  },
});
