import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from "react-native";


const Animation5 = () => {

    const [animation] = useState(new Animated.Value(1));

    const pressInBtn = () => {
        Animated.spring( animation, {
            toValue: .8
        }).start();
    }; 
    
    const pressOutBtn = () => {
        Animated.spring( animation, {
           toValue: 1,
           friction: 4, //rebote de la animacion su numero base es 7, mas bajo el numero mas rebote 
           tension: 20

        }).start();
    };

    const animationStyle = {
        transform: [{ scale: animation }]
    }

    return ( 
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={ () => pressInBtn()}
                onPressOut={ () => pressOutBtn()}
            >
                <Animated.View style={[styles.btn, animationStyle]}>
                    <Text style={styles.texto}>Iniciar Sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
     );
}
 

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn:{
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto:{
        color:'#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20
    }
    
})

export default Animation5;