import React from 'react'
import { View, StyleSheet } from 'react-native'

const Flexbox = () => {
    return (
        <View style={myStyle.main}>
            <View style={myStyle.box1}>
               <View style={myStyle.innerdiv1}></View>
               <View style={myStyle.innerdiv2}></View>
               <View style={myStyle.innerdiv3}></View>
            </View>
            <View style={myStyle.box2}>
            <View style={myStyle.innerdiv1}></View>
               <View style={myStyle.innerdiv3}></View>
               <View style={myStyle.innerdiv2}></View>
            </View>
            <View style={[myStyle.box3, {flexDirection:'row'}]}>
               <View style={myStyle.innerdiv3}></View>
               <View style={myStyle.innerdiv1}></View>
               <View style={myStyle.innerdiv2}></View>
            </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
    main: { flex: 1 },
    box1: {

        flex: 1,
        backgroundColor: "green",
        flexDirection: "row",
    },
    box2: {
        flex: 1,
        backgroundColor: "blue"
    },
    box3: {
        flex: 1,
        backgroundColor: "yellow"
    },
    innerdiv1: {
        flex: 1,
        backgroundColor: "gray"
    },
    innerdiv2: {
        flex: 1,
        backgroundColor: "pink"
    },
    innerdiv3: {
        flex: 1,
        backgroundColor: "white"
    }
})

export default Flexbox
