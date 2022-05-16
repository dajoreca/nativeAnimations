import React, {useEffect, useState} from "react";
import { StyleSheet, View, Animated } from "react-native";


const Animation6 = () => {
    return ( 
        <View style={{ alignItems: 'center'}}>
            <View
                style={[
                    styles.caja
                ]}
            >

            </View>

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