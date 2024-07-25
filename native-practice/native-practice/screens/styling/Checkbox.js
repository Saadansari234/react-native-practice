import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
const Checkbox = () => {

    const [checkbox1, setcheckbox1] = useState(0)

    return (
        <View>

            <TouchableOpacity onPress={() => setcheckbox1(1)}>

                <View style={mystyle.main}>
                    <View style={mystyle.checkbox}>
                        {
                            checkbox1 === 1 ? <View style={mystyle.checkboxbg}></View> : null
                        }
                    </View>
                    <Text style={mystyle.checkboxText}>checkbox 1</Text>
                </View>
            </TouchableOpacity >

            <TouchableOpacity onPress={() => setcheckbox1(2)}>

                <View style={mystyle.main}>
                    <View style={mystyle.checkbox}>
                        {
                            checkbox1 === 2 ? <View style={mystyle.checkboxbg}></View> : null
                        }
                    </View>
                    <Text style={mystyle.checkboxText}>checkbox 1</Text>
                </View>
            </TouchableOpacity >
        </View>


    )
}

const mystyle = StyleSheet.create({

    main: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    checkbox: {
        width: 30,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"

    },
    checkboxbg: {
        borderRadius: 5,
        width: 22,
        height: 22,
        backgroundColor: "black",

    },
    checkboxText: {
        fontSize: 20
    }
})


export default Checkbox
