import React, { useState } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'

const Modals = () => {
    const [show, setShow] = useState(false)
    return (
        <View style={mystyle.Modal}>
            <View style={mystyle.container}>
                {
                    show ? (
                        <View style={mystyle.popup}>
                            <Text>This is our modal</Text>
                            <Button title='close' onPress={()=>setShow(false)} />
                        </View>
                    ) : null

                }
            </View>
            <Button title='open' onPress={()=>setShow(true)} />
        </View>
    )
}

const mystyle = StyleSheet.create({
    Modal: {
        backgroundColor: "rgba(50,50,50,.5)",
        flex: 1,
        justifyContent: "flex-end"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    popup: {
        backgroundColor: "white",
        width: 300,
        height: 300,
        shadowColor: "black",
        elevation: 5,
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
    },
})

export default Modals
