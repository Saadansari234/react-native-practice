import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import About from './screens/About';


const Stack = createNativeStackNavigator();


const Layout = () => {
  return (
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'blue' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} 
          initialParams={{ itemId: 42 }}
           options={{
            title: 'Home Screen',
            headerStyle: { backgroundColor: 'blue' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown: true, // or false to hide the header
          }}
          />
          <Stack.Screen name="About" component={About} 
          
          options={{
            headerTitle:()=> <Button title='left'  />,
            headerRight:()=> <Header/>,
            
          }}

          />
        </Stack.Navigator>
      </NavigationContainer>
    
  )
}

const Header=()=>{
    return(
      <Text>hello</Text>
    )
  }
export default Layout
