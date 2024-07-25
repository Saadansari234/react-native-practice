import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import UserList from './UserList'

const stact= createNativeStackNavigator()
const Index = () => {
  return (
    <NavigationContainer>
        <stact.Navigator>
            <stact.Screen name='Home' component={Home} />
            <stact.Screen name='UserList' component={UserList} />
        </stact.Navigator>
    </NavigationContainer>
  )
}

export default Index
