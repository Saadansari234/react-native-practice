import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView, BackHandler } from 'react-native'

const FlatLists = () => {
    const list = [
        {
            name: "saad",
            gmail: 'abc@gmail.com',
            rollno: 1
        },
        {
            name: "osama",
            gmail: 'abc@gmail.com',
            rollno: 2
        },
        {
            name: "sami",
            gmail: 'abc@gmail.com',
            rollno: 3
        },
        {
            name: "zayad",
            gmail: 'abc@gmail.com',
            rollno: 4
        },
        {
            name: "saad",
            gmail: 'abc@gmail.com',
            rollno: 1
        },
        {
            name: "osama",
            gmail: 'abc@gmail.com',
            rollno: 2
        },
        {
            name: "sami",
            gmail: 'abc@gmail.com',
            rollno: 3
        },
        {
            name: "zayad",
            gmail: 'abc@gmail.com',
            rollno: 4
        },
        {
            name: "saad",
            gmail: 'abc@gmail.com',
            rollno: 1
        },
        {
            name: "osama",
            gmail: 'abc@gmail.com',
            rollno: 2
        },
    ]
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.heading}>see the list</Text>

            <FlatList
                data={list}
                renderItem={({ item }) => <StudentList item={item}/>}

            />
            {/* <ScrollView>
            <View>
            {
                list.map((elem) => {
                    return (
                        <Text style={myStyle.list}>{elem.name}</Text>
                    )
                })
            }
            </View>
            </ScrollView> */}

        </View>
    )
}

const StudentList = ({item}) => {
    return (
        <View style={myStyle.list}>
            <Text style={myStyle.item}>{item.name}</Text>
            <Text >{item.gmail}</Text>
        </View>
    )
}

const myStyle = StyleSheet.create({
    container: {
        padding: 20
    },
    heading: {
        fontSize: 26,
        fontWeight: "800",

    },
    list: {
        flexDirection: "row",
        backgroundColor: "#FF5555",
        marginTop: 5,
        padding: 3,
    },
    item: {
        flex: 1,


    }



})

export default FlatLists
