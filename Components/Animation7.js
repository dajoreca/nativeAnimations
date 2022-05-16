import React, {useEffect, useState} from "react";
import { StyleSheet, View, Animated } from 'react-native';

const Animation7 = () => {

    const [animation1] = useState( new Animated.Value(0));
    const [animation2] = useState( new Animated.Value(1));

    useEffect(() => {
        Animated.sequence([
            Animated.timing( animation1, {
                toValue: 300,
                duration: 1000
            }),
            Animated.spring( animation2 , {
                toValue: 10
            }),
            Animated.spring( animation2, {
                toValue: 1
            }),
            Animated.timing( animation1, {
                toValue: 600,
                duration: 1000
            })
        ]).start();
    }, []);

    const animationStyle = {
        transform: [
            { translateY: animation1},
            { scale: animation2 }
        ]
    }

    return ( 
        <View>
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
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'      
    }
})
export default Animation7;