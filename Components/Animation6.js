import React, {useEffect, useState} from "react";
import { StyleSheet, View, Animated } from "react-native";


const Animation6 = () => {

    const [animation1] = useState(new Animated.Value(0));
    const [animation2] = useState(new Animated.Value(-50))

    useEffect(() => {
        Animated.loop( //bucle de animaciones
            Animated.sequence([ //para que pueda hacer animaciones en secuencia
                Animated.timing( animation2, {
                    toValue: -30,
                    duration: 0
                }),
                Animated.timing( animation1, {
                    toValue: 60,
                    duration: 500

                }),
                Animated.timing( animation2, {
                    toValue: 30,
                    duration: 500
                }),
                Animated.timing( animation1, {
                    toValue: 0,
                    duration: 500

                }),
                Animated.timing( animation2, {
                    toValue: -30,
                    duration: 500
                }),

            ])
        ).start();
    }, []);

    const animationStyle = {
        transform: [
            { translateY: animation1 },
            { translateX: animation2 }
        ]
    }


    return ( 
        <View style={{ alignItems: 'center'}}>
            <Animated.View
                style={[
                    styles.caja,
                    animationStyle
                ]}
            >

            </Animated.View>

        </View>
     );
}

const styles = StyleSheet.create({
    caja:{
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue'
    },
})
 
export default Animation6;