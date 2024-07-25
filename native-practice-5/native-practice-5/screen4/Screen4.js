import React from 'react'
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Postapi from './Postapi';
import Deleteapi from './Deleteapi';
import UseRef from './UseRef';
import Asyncstore from './Asyncstore';
import Asyncstore2 from './Asyncstore2';


const TopTabs= createMaterialTopTabNavigator()

const Screen4 = () => {
  return (
  <NavigationContainer>
    <TopTabs.Navigator>
        <TopTabs.Screen name='Post api' component={Postapi} />
        <TopTabs.Screen name='Delete api' component={Deleteapi} />
        <TopTabs.Screen name='useref' component={UseRef} />
        <TopTabs.Screen name='Async storage 2' component={Asyncstore2} />
        {/* <TopTabs.Screen name='Search api' component={SearchApi} /> */}
    </TopTabs.Navigator>
  </NavigationContainer>
  )
}


export default Screen4
