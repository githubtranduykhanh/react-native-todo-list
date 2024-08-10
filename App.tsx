import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { fontFamilies, colors } from './src/constants';


SplashScreen.preventAutoHideAsync();


export default function App() {
  const [loaded, error] = useFonts({
    [fontFamilies.regular]: require('./assets/fonts/Poppins-Regular.ttf'),
    [fontFamilies.medium]: require('./assets/fonts/Poppins-Medium.ttf'),
    [fontFamilies.semiBold]: require('./assets/fonts/Poppins-SemiBold.ttf'),
    [fontFamilies.bold]: require('./assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: fontFamilies.bold, fontSize: 20, color:colors.test }}>Roboto Regular</Text>
      <Text style={{ fontFamily: fontFamilies.medium, fontSize: 20 ,color:colors.test}}>Roboto Bold</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',    
  },
});
