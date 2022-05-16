import React, {useState, useEffect} from "react"; 
import { StyleSheet, Text, Animated } from "react-native";

const Animation2 = () => {

    const [ animation ]=useState(new Animated.Value(0) );
    
    useEffect(() => {
        Animated.timing(
            animation, {
                toValue: 450, //valor al que llega
                duration: 1000 //cantidad de tiempo en llegar
            }

        ).start(); //iniciar la animacion
    }, []);

  return ( 
      <Animated.View
            style={[
                styles.caja,
                { 
                    width:animation, //alarga la caja horizontalmente
                    height: animation //alarga la caja verticalmente
                    //ambas hacen parecer que cambia de tamaño la caja
            }
            ]}
      >
           </Animated.View>
  );
}

const styles=StyleSheet.create({
    caja:{
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animation2