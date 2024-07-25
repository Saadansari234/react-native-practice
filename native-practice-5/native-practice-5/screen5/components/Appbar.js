import React from 'react'
import { View, Text } from 'react-native'
import {  useSelector } from 'react-redux'
const Appbar = ({navigation}) => {
  
    const data= useSelector(state=> state.addcart )
    const count= data.length
  

  return (
    <View style={{paddingHorizontal:30,paddingVertical:20, backgroundColor:"yellowgreen", marginBottom:30}} >
        <Text style={{textAlign:"right", fontSize:22, color:"white", fontWeight:"bold" }} onPress={()=>navigation.navigate("UserList")}>{count}</Text>
    </View>
  )
}

export default Appbar
