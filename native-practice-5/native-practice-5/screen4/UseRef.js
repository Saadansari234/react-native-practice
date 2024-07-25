import React, { useRef } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'


const UseRef = () => {

    const input= useRef()
     const handlePress=()=>{
        input.current.focus()
        input.current.setNativeProps({
            fontSize:25
        })
     }
    return (
        <View style={mystyle.container}>
            <TextInput
                style={mystyle.input}
                placeholder='enter name'
                ref={input}
            />

            <TextInput
                style={mystyle.input}
                
                placeholder='enter name'

            />
             <Button title="press" onPress={handlePress} />
        </View>
    )
}

const mystyle = StyleSheet.create({
    input: {
        paddingHorizontal: 5,
        borderRadius: 5,
        paddingVertical: 3,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "gray",
        color: "lightgary",
    },
    container: {
        margin: 20,
        flex: 1,
        justifyContent: "center",
    }

})
export default UseRef
