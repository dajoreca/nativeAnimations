import React, {useState, useEffect} from "react"; 
import { StyleSheet, Text, Animated, View } from "react-native";

const Animation3 = () => {

    const [ animation ]=useState(new Animated.Value(14) );
    
    useEffect(() => {
        Animated.timing(
            animation, {
                toValue: 40, //valor al que llega
                duration: 500 //cantidad de tiempo en llegar
            }

        ).start(); //iniciar la animacion
    }, []);

  return ( 
      <View>
            <Animated.Text 
                style={[styles.texto, {fontSize: animation}]}
            >Animation3</Animated.Text>
        </View>
  );
}

const styles=StyleSheet.create({
    texto:{
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animation3