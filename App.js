//Imports
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from './src/components/Header/Header';
import Category from './src/components/Category/Category';
import Slide from './src/components/Slide/Slide'


const App = () => {
  //Background All
  const bg = { uri: 'https://www.nationalgeographic.com.es/medio/2017/05/04/crater-triple-en-terra-sirenum-marte_83ca2016.jpg' };
  // State for Fonts
  const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        if(!fontsLoaded){
        loadFonts();
        }
    });
    const loadFonts = async () => {
        await Font.loadAsync({
        MyriadProRegular: require('./assets/fonts/MyriadPro-Regular.otf'),
        });
         setFontsLoaded(true);
    }
  return (
    <View style={styles.container}>   
     <ImageBackground source={ bg } style={styles.bg}>
        <View style={styles.wrapContent}>
          <StatusBar style="auto" />
          <Header />
          <ScrollView>
            <Slide />
            <Category />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  wrapContent: {
    flex: 1,
    backgroundColor:  'rgba(0, 0, 0, 0.5)',
  },
 
});
