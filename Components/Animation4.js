import React, {useState, useEffect} from "react"; 
import { StyleSheet, Text, Animated, View } from "react-native";

const Animation4 = () => {

    const [ animation ]=useState(new Animated.Value(0) );
    
    useEffect(() => {
        Animated.timing(
            animation, {
                toValue: 360, //valor al que llega
                duration: 500 //cantidad de tiempo en llegar
            }

        ).start(); //iniciar la animacion
    }, []);

    const Interpolation = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });

    const animationStyle = {
        transform: [{ rotate: Interpolation}]
    }

  return ( 
      <View>
            <Animated.View 
                style={[styles.texto, animationStyle]}
            ></Animated.View>
        </View>
  );
}


const styles=StyleSheet.create({
    texto:{
     width: 100,
     height: 100,
     backgroundColor: 'cornflowerblue'
    }
})

export default Animation4