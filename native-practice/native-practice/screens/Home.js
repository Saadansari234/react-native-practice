
import React from 'react';
import { Text, View, Button } from 'react-native';
import { useState } from 'react';


export const WelcomeScreen = () =>{
    const val= 100
    const [data,setData]=useState(val)
    const clickheretoInc=()=>{
        setData(data+1)
        console.warn("increasing")
    }
    const clickheretoDec=()=>{
        setData(data-1)
        console.warn("decreasing")
    }

return(
    <View>
        <Text>{data}</Text>
        <Button title='press here' color={"green"} onPress={()=>clickheretoInc()} />
        <Button title='press here' color={"red"} onPress={()=>clickheretoDec()} />
    </View>
);  
} 
