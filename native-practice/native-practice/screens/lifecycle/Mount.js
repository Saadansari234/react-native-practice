import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Mount = () => {

    
    useEffect(() => {
       console.warn("page have been refresh")
    }, [])

    return (
        <View>
            <Text>normal text</Text>
        </View>
    )
}

export default Mount
