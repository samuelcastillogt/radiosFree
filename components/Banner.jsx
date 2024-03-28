import React, {useState} from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import img from "../assets/banner.jpeg"
import { contants } from "../constans";
const Banner = ()=>{
    const [count, setCount]=useState(0)

    return(
        <View style={styles.container}>
            {/* <ImageBackground source={img} resizeMode="cover" style={styles.image}/> */}
            <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-j1Cgcrda53_yhj2je8azkYyxV_GzjOL-JdgHMNcfImso-617Ft6imJ6ByK7VQpskdI&usqp=CAU"}} style={styles.image}/>
            {/* <Text style={styles.title}>Radios 100% Gratis</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 150,
        width: "110%",
        marginBottom: 20,
        elevation: 20,
        backgroundColor: "red",
        borderBottomRightRadius: 20
    },
    image: {
        width: "100%",
        height: 150,
        borderBottomRightRadius: 20
      },
    title:{
        color: contants.color,
        backgroundColor: contants.cardBackground,
        padding: 5,
        fontSize:30
    }
})
export default Banner