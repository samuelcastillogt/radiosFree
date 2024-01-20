
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { contants } from '../constans';
export default function RadioCard(props) {
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
    const [shadowRadius, setShadowRadius] = useState(5);
    const [shadowOpacity, setShadowOpacity] = useState(1);
    const {radio, setRadio} = props
    console.log(props.radio)
    return (
        <TouchableHighlight onPress={()=> setRadio(radio)} style={styles.container}>
           <View style={styles.container}>
            <View style={[
          styles.square,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: -shadowOffsetHeight,
            },
            shadowOpacity,
            shadowRadius,
          },
        ]}>
               <Text style={styles.title}>{radio.data.nombre}</Text> 
            </View>
            
        </View> 
        </TouchableHighlight>
        
    );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 150,
    backgroundColor: contants.cardBackground,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    alignSelf: 'center',
    shadowColor: 'black',
  },
  title:{
    color: contants.color
  }
});
