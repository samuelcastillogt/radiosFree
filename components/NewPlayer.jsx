import { Dimensions, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

import React from 'react'
import { contants } from '../constans';

const NewPlayer = () => {
  return (
    <View style={styles.container}>
      <Text>NewPlayer</Text>
      <AntDesign name="play" size={30} color={contants.cardBackground} />
    </View>
  )
}

export default NewPlayer

const styles = StyleSheet.create({
    container:{
        height: 100,
        backgroundColor: "red",
        width: Dimensions.get("screen").width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0
    }
})