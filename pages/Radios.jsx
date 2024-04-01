import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import RadioCard from '../components/RadioCard'
import { contants } from '../constans'

const Radios = ({navigation, route}) => {
    const [filtro , setFiltro] = useState([])
    const radios = useSelector(state => state.radios.radios)
    useEffect(()=>{
        if(route.params.filtro != undefined){
            const filtrada = radios.filter(item => item.data.categoria == route.params.filtro)
            setFiltro(filtrada)
        }
    },[])
  return (
    <View style={styles.container}>
      {
        filtro.length > 0 &&  <FlatList 
      data={filtro}
      renderItem={(item) => <RadioCard radio={item.item} setRadio={()=> navigation.navigate("Radio", {radio: item.item})}/>}
      keyExtractor={(item) => item.id}
      style={{marginTop: 10}}
    /> || <FlatList 
    data={radios}
    renderItem={(item) => <RadioCard radio={item.item} setRadio={()=> navigation.navigate("Radio", {radio: item.item})}/>}
    keyExtractor={(item) => item.id}
    style={{marginTop: 10}}
  />

      }
    </View>
  )
}

export default Radios

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: contants.bodyBackground
    }
})