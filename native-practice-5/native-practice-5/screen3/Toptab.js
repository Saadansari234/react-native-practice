import React from 'react'
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home'
import About from './About';
import Realapi from './Realapi';

const TopTabs= createMaterialTopTabNavigator()

const Toptab = () => {
  return (
  <NavigationContainer>
    <TopTabs.Navigator>
        <TopTabs.Screen name='Home' component={Home} />
        <TopTabs.Screen name='About' component={About} />
        <TopTabs.Screen name='Realapi' component={Realapi} />
    </TopTabs.Navigator>
  </NavigationContainer>
  )
}


export default Toptab
