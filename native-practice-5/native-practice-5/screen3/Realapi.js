import React, { useEffect, useState } from 'react'
import { View,Text, FlatList } from 'react-native'

const Realapi = () => {
  const [data,Setdata]=useState()
    const callAPI= async()=>{
     const url="http://192.168.0.107:3000/userData"
     let result=await fetch(url)
     result=await result.json()
     Setdata(result)
    }
    
    useEffect(()=>{
    callAPI()
    },[])

  return (
  <View>
    {
        data ?
        <FlatList
        data={data}
        renderItem={({item})=><View>
           <Text>name: {item.name}</Text>
           <Text>age: {item.age}</Text>
        </View>}
        />:null
    }
  </View>
  )
}

export default Realapi
