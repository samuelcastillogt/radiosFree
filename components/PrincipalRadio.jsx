import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native'
import React from 'react'

const PrincipalRadio = (props) => {
    const {categoria, imagen, nombre, uri} = props.radio.data
  return (
    <View style={styles.constainer}>
      <TouchableHighlight onPress={()=> props.selectRadio(props.radio.data)}>
      <View>
            <Image source={{uri: imagen}} style={styles.img}/>
            <Text style={styles.title}>{nombre}</Text>
        </View>
      
      </TouchableHighlight>

    </View>
  )
}

export default PrincipalRadio

const styles = StyleSheet.create({
    constainer:{
        position: "relative"
    },
    title: {
        fontSize: 20,
        color: "white",
        position: "absolute",
        bottom: 2,
        backgroundColor: "#191b27",
        padding: 10
    },
    img:{
        width: Dimensions.get("screen").width,
        height: 200
    }
})