import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Player from '../components/Player'
import { contants } from '../constans'

const Radio = ({route}) => {
  return (
    <View style={styles.container}>
      <Player setRadio={()=>console.log("jajajajaja")} radio={route.params.radio}/>
    </View>
  )
}

export default Radio

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: contants.bodyBackground,
        
        padding: 20
    }
})