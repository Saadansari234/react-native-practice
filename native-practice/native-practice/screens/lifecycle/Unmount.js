import React, { useEffect, useState } from 'react'
import { Button, View, Text } from 'react-native'
// component unount means when we remove a component from our page
const Unmount = () => {
    const [state, setState] = useState(false)

    // useEffect(()=>{
    // console.warn(state)
    // },[state])

    return (
        <View>
            <Text>press here to toggle your text</Text>
            <Button title='press here' onPress={() => setState(!state)} />
            {
                state ? <Element /> : null
            }

        </View>
    )
}

const Element = () => {

    let timer = setInterval(() => {
        console.warn("timer called")
    }, 2000)
    

    useEffect(() => {
        return()=>{
         clearInterval(timer)
        }
    
    })
    
    return (
        <Text style={{ fontSize: 30, color: "red" }}>Our Text</Text>
    )
}

export default Unmount
