import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import RadioCard from '../components/RadioCard'
import { contants } from '../constans'
import { useSQLiteContext } from 'expo-sqlite/next';
import Empty from '../components/Empty'
const Fav = ({navigation, route}) => {
    const db = useSQLiteContext();
    const [filtro , setFiltro] = useState([])
    const radios = useSelector(state => state.radios.radios)
    const getFav = async()=>{
        const ids = []
        const firstRow = await db.getAllAsync('SELECT idRadio FROM favorite')
        firstRow.forEach(item => ids.push(item.idRadio))
        const filtrada = radios.filter(item => {
                            if(ids.includes(item.id)) return item
                        })
        setFiltro(filtrada)
        }
    useEffect(()=>{
        getFav()
    },[])
  return (
    <View style={styles.container}>
      {
        filtro.length > 0 &&  <FlatList 
      data={filtro}
      renderItem={(item) => <RadioCard radio={item.item} setRadio={()=> navigation.navigate("Radio", {radio: item.item})}/>}
      keyExtractor={(item) => item.id}
      style={{marginTop: 10}}
    /> || <Empty title="Aun no tiene favotitos :("/>

      }
    </View>
  )
}

export default Fav

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: contants.bodyBackground
    }
})