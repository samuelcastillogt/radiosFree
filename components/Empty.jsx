import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { contants } from '../constans'

const Empty = (props) => {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/Radio.png")} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        fontSize: 30,
        color: contants.color
    }
})