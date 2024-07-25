import React, { useState } from 'react'
import { Button, View, Text } from 'react-native/'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Asyncstore = () => {

    const [item, setItem] =useState('')

    const setData = async () => {
        await AsyncStorage.setItem("name", "saad ansari")
    }

    const getData = async () => {
        const data = await AsyncStorage.getItem("name")
        setItem(data)
        console.warn(data)
    }

    const removeData = async () =>{
         await AsyncStorage.removeItem("name")
         setItem('')
    }

    return (
        <View>
            <Text>async storage {item} </Text>
            <Button title='set data' onPress={setData} />
            <Button title='get data' onPress={getData}/>
            <Button title='remove data' onPress={removeData} />
        </View>
    )
}

export default Asyncstore
