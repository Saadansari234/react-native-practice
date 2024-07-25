import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const SearchApi = () => {
    const [data, setdata] = useState()
    const setSearch = async (text) => {
        const url = `http://192.168.0.107:3000/userData?q=${text}`
        let result = await fetch(url)
        console.warn(result);
        result = await result.json()

        setdata(result)
    }

    return (
        <View style={mystyle.container}>
            <Text style={mystyle.header}>Search your Data</Text>
            <TextInput
                style={mystyle.input}
                placeholder='search'
                onChangeText={(text) => setSearch(text)}
            />

            {                
                    data.map((elem) => {
                        return (
                            <View>
                               <Text>{elem.name}</Text>
                            </View>
                        )
                    }) 
            }
        </View>
    )
}

const mystyle = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 10,
    },
    header: {
        fontSize: 22,
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    }
})

export default SearchApi
