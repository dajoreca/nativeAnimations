import React, {useState, useEffect} from "react"; 
import { StyleSheet, Text, Animated } from "react-native";

const Animation1 = () => {

    const [ animation ]=useState(new Animated.Value(0) );
    
    useEffect(() => {
        Animated.timing(
            animation, {
                toValue: 1, //valor al que llega
                duration: 500 //cantidad de tiempo en llegar
            }

        ).start(); //iniciar la animacion
    }, []);

  return ( 
      <Animated.View
        style={{
            opacity: animation
        }}
      >
            <Text style={styles.texto}>Animacion1</Text>
      </Animated.View>
  );
}

const styles=StyleSheet.create({
    texto:{
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animation1