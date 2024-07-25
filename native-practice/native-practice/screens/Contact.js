import React, { useState } from 'react'
import { TextInput, View, Text,StyleSheet, Button } from 'react-native'

const Contact = () => {
    const [name,setname]=useState('')
    const [names, setNames] = useState([]);
  const handlesubmit=()=>{
    
        setNames(prevNames => [...prevNames, name]);
        setname('');
    
  }
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.container.textHeading}>input handling</Text>
            <Text style={myStyle.container.textPara}>your name is:</Text>
            { names.map((name, index) => (
                <Text key={index}>{name}</Text>
            ))}
            <TextInput placeholder='type your name'  value={name} style={myStyle.container.input} onChangeText={(text)=>setname(text)} />
            <Button title='Send Name' color={'green'} onPress={handlesubmit}/>
            <Button title='clear Name' color={'#FF4444'} onPress={()=>setNames([])}/>
        </View>
    )
}

const myStyle= StyleSheet.create({
    container:{
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        display:"flex",
        flexDirection:"column",
        gap:10,

        textHeading:{
            fontSize:22,
            fontWieght:"600",
        },
        textPara:{
            fontSize:18,
            fontWieght:"600",
        },

        input:{
         borderWidth:1,
         borderColor:"red",
         padding:5
        }
    }
})


export default Contact
