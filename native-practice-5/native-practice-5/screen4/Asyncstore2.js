import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Asyncstore2 = () => {
   const [name,setname]= useState('')
   const [email,setemail]= useState('')
   const [data,setdata]=useState([])
  
  const habndlePress= async()=>{
      const updatedData=  {Newname:name, newemail:email}
      const newDataArray = [...data, updatedData];
      setdata(newDataArray);
      await AsyncStorage.setItem("details", JSON.stringify(newDataArray))
  } 

   const getData=async()=>{
       const mydata= await AsyncStorage.getItem("details")
       console.warn(mydata);
   }

   const Removedata= async()=>{
        AsyncStorage.removeItem("details")
   }

  return (
    <View style={mystyle.container}>
            <TextInput
                style={mystyle.input}
                placeholder='enter name'
                value={name}
                onChangeText={(text)=> setname(text)}
            />

            <TextInput
                style={mystyle.input}
                placeholder='enter email'
                value={email}
                onChangeText={(text)=> setemail(text)}
            />
            
             <Button title="send" onPress={()=>habndlePress()}  />
             <Button title="get" onPress={()=>getData()}  />
             <Button title="remove" onPress={()=>Removedata()}  />

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

export default Asyncstore2
