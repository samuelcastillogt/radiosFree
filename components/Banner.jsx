import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import img from "../assets/banner.jpeg"
import { contants } from "../constans";
const Banner = ()=>{
    return(
        <View style={styles.container}>
            <ImageBackground source={img} resizeMode="cover" style={styles.image}/>
            <Text style={styles.title}>Radios 100% Gratis</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "90%",
        margin: 20,
        borderRadius: 10
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10
      },
    title:{
        color: contants.color,
        backgroundColor: contants.cardBackground,
        padding: 5,
        fontSize:30
    }
})
export default Banner