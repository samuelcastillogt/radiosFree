import React, {useState} from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import img from "../assets/banner.jpeg"
import { contants } from "../constans";
const Banner = ()=>{
    const [count, setCount]=useState(0)

    return(
        <View style={styles.container}>
            <ImageBackground source={img} resizeMode="cover" style={styles.image}/>
            <Text style={styles.title}>Radios 100% Gratis</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 150,
        width: "90%",
        margin: 20,
        borderRadius: 10,
        elevation: 20
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