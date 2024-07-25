
import React, { useEffect, useState } from 'react'
import { Button, TextInput,Text, View, StyleSheet } from 'react-native'

const Putapi = (props) => {

    const { id,  } = props.selectedData 
    const [newName, setNewName] = useState(''); // Initialize state with existing data
    const [newAge, setNewAge] = useState('');
    const [newEmail, setNewEmail] = useState('');
    

    useEffect(()=>{
      if (props.selectedData ) {
        setNewName(props.selectedData.name)
        setNewAge(props.selectedData.age.toString())
        setNewEmail(props.selectedData.email)
      }
    },[props.selectedData ])
  
    const Putapi = async (id) => {
      const url = "http://10.0.2.2:3000/userData";
      let result = await fetch(`${url}/${id}`, {
        method: "put",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName, age: newAge, email: newEmail }) // Use new state values
      });
      props.callAPI();
      props.SetShowModal(false)
    };

    
  return (
    <View style={mystyle.ModalView}>
    <View style={mystyle.modalcontainer}>
      <Text>Details</Text>
      <TextInput
        placeholder='enter your name'
        style={mystyle.textinput}
        value={newName}
        onChangeText={(text) => setNewName(text)} // Update newName state
      />
      <TextInput
        placeholder='enter your age'
        style={mystyle.textinput}
        value={newAge}
        onChangeText={(text) => setNewAge(text)} // Update newAge state
      />
      <TextInput
        placeholder='enter your email'
        style={mystyle.textinput}
        value={newEmail}
        onChangeText={(text) => setNewEmail(text)} // Update newEmail state
      />
      <Button title='save' onPress={() => Putapi(id)} />
      <Button title='close' onPress={() => props.SetShowModal(false)} />
    </View>
  </View>
  )
}


const mystyle = StyleSheet.create({
    ModalView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    modalcontainer: {
      backgroundColor: "#fff",
      paddingHorizontal: 30,
      paddingVertical: 20,
      elevation: 5,
    },
    textinput:{
      borderWidth:1,
      paddingHorizontal:5,
      paddingVertical:4,
  
    }
  })

export default Putapi
