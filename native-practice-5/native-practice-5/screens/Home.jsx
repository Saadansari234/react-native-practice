import React from 'react'
import { Text, View, Platform, TouchableOpacity, Button } from 'react-native'
import WebView from 'react-native-webview'

const Home = (props) => {
   
    const {Name,Age}= props.route.params.details

    return (
        <View>
            <Text>hello Home Page</Text>
            <Text>platform : {Platform.OS}</Text>
            {
                Platform.OS == "android" ?
                    <View style={{ width: 100, height: 100, backgroundColor: "green" }}></View> :
                    <View style={{ width: 100, height: 100, backgroundColor: "red" }}></View>
            }
            <Text>platform propertys: <Text style={{ color: "blue" }}>{JSON.stringify(Platform)}</Text></Text>
            <Text>React native version: <Text style={{ color: "red" }}>{Platform.constants.reactNativeVersion.minor}</Text></Text>

            <Button title='About' onPress={()=> props.navigation.navigate('About')}  />
            <Button style={{marginTop:10}} title='go back' onPress={() => props.navigation.goBack()}/>

            <Text>Home screen props</Text>
            <Text>Name: {Name}</Text>
            <Text>Age:{Age}</Text>
        </View>
    )
}


export default Home
