import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTvTGHVhi_njsRy3XPtIRqlxRwwEgtkQgFkLP1KhpQnYK8afdxTRiAlK6QcxiS81FZ9U&usqp=CAU"
]
const Slider = (props) => {
    const [index, setIndex] = useState(0)
    const {radios} = props
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(index < radios.length -1){
                setIndex(index + 1)
            }else{
                setIndex(0)
            }
        }, 5000)
        return ()=> clearInterval(interval)
    },[index])
  return (
    <View style={styles.container}>
             <ImageBackground source={{uri: radios[index].data.imagen}}
                       resizeMode='cover'
                        style={styles.image}
      >
        <Text style={styles.title}>{radios[index].data.nombre}</Text>
        </ImageBackground>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    container:{
        width: "80%",
        height: 150,
        borderRadius: 20,
        backgroundColor: "red"
    },
    image: {
        height: 150,
        width: "auto",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        borderRadius: 20,
        overflow: "hidden",
        padding: 10
    },
    title:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 10
    }
})