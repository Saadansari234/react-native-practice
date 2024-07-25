import React, { useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

const Postapi = () => {
    const [data, setdata] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleApi = async () => {

        const url = "http://192.168.0.107:3000/userData"

        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // post the data in api in json format
            body: JSON.stringify(data)
        })
        // Reset the input fields to their initial values
        setdata({
            name: "",
            age: "",
            email: ""
        });
        // get the data from api in json format
        console.warn("data has been submitted")
        // result = await result.json()
        // console.warn(result)
    }

    // useEffect(()=>{
    //     handleApi()
    // },[refresh])

    return (
        <View style={mystyle.container}>
            <View>
                <TextInput
                    placeholder='enter your name'
                    value={data.name}
                    style={mystyle.input}
                    onChangeText={(value) => setdata(prevState => ({ ...prevState, name: value }))}
                />

                <TextInput
                    placeholder='enter your age'
                    value={data.age}
                    style={mystyle.input}
                    onChangeText={(value) => setdata(prevState => ({ ...prevState, age: value }))}
                />

                <TextInput
                    placeholder='enter your email'
                    value={data.email}
                    style={mystyle.input}
                    onChangeText={(value) => setdata(prevState => ({ ...prevState, email: value }))}
                />

            </View>
            <Button
                title='Post api'
                onPress={handleApi}
            />
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

export default Postapi
