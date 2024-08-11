import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { typography, colors, globalStyles } from './src/styles';
import HomeScreen from './src/screens/HomeScreen';


SplashScreen.preventAutoHideAsync();


export default function App() {
  const [loaded, error] = useFonts({
    [typography.fontFamily.regular]: require('./assets/fonts/Poppins-Regular.ttf'),
    [typography.fontFamily.medium]: require('./assets/fonts/Poppins-Medium.ttf'),
    [typography.fontFamily.semiBold]: require('./assets/fonts/Poppins-SemiBold.ttf'),
    [typography.fontFamily.bold]: require('./assets/fonts/Poppins-Bold.ttf'),
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

    <SafeAreaView style={globalStyles.safeAreaView}>
          <StatusBar translucent style='light' animated={true} backgroundColor='transparent' />
          <HomeScreen/>   
    </SafeAreaView>
      
  );
}
