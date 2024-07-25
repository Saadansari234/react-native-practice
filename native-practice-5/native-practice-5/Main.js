import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './screen5/Home';
import Index from './screen5/Index';
const Main = () => {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Index/>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 30,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });

export default Main
