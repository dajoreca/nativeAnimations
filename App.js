import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import Animation1 from './Components/Animation1';
import Animation2 from './Components/Animation2';
import Animation3 from './Components/Animation3';
import Animation4 from './Components/Animation4';
import Animation5 from './Components/Animation5';
import Animation6 from './Components/Animation6';



const App = () => {
  return(
    <>
    <View style={styles.contenido}>
        <Animation6 />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100
  },
});


export default App