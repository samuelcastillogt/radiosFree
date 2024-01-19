
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function RadioCard(props) {
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
    const [shadowRadius, setShadowRadius] = useState(5);
    const [shadowOpacity, setShadowOpacity] = useState(1);
    const {radio, setRadio} = props
    return (
        <TouchableHighlight onPress={()=> setRadio(radio)}>
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
               <Text>{radio.data.nombre}</Text> 
            </View>
            
        </View> 
        </TouchableHighlight>
        
    );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 150,
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',

    justifyContent: 'center',
  },
  square: {
    alignSelf: 'center',
    shadowColor: 'black',
  },
});
