import React, { useState } from 'react'
import { View, Button, Text, TextInput } from 'react-native'

const Login = (props) => {
    // const [Name,setName]= useState("")
    // const [Age,setAge]=useState(0)
    const [details, setDetails] = useState({
        Name: "",
        Age: 0,
    })
    // const name='saad'
    // const age=90

    return (
        <View>
            <Text>Login screen</Text>
            <TextInput
                placeholder='enter name'
                onChangeText={(value) => setDetails(prevState => ({ ...prevState, Name: value }))}
            />
            <TextInput
                placeholder='enter age'
                onChangeText={(value) => setDetails(prevState => ({ ...prevState, Age: value }))}
            />
            <Button
                title='login'
                onPress={() => props.navigation.navigate('Home', { details: details })}
            />

        </View>
    )
}

export default Login
