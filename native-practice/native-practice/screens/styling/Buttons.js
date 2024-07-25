import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const Buttons = () => {
    return (
        <View>
            <TouchableOpacity>
                <Text style={mystyle.main}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[mystyle.main, mystyle.primary]}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[mystyle.main, mystyle.success]}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[mystyle.main, mystyle.warning]}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[mystyle.main, mystyle.error]}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const mystyle = StyleSheet.create({
    main: {
        textAlign: "center",
        backgroundColor: "#bbb",
        margin: 10,
        padding: 10,
        fontSize: 20,
        borderRadius: 5,
        color: "#fff",
        elevation: 4,
    },
    primary: {
        backgroundColor: "blue",
    },
    success: {
        backgroundColor: "green",
    },
    warning: {
        backgroundColor: "gold",
    },
    error: {
        backgroundColor: "red",
    },
})

export default Buttons
