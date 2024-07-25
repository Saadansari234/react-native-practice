import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home}
                    
                />
                <Tab.Screen name='Setting' component={Setting}
                
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home Page</Text>
        </View>
    )
}

const Setting = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Text>setting Page</Text>
        </View>
    )
}

export default TabNav
