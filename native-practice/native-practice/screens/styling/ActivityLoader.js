import React, { useState } from 'react'
import { View, ActivityIndicator,Button } from 'react-native'

const ActivityLoader = () => {
const [action,setAction]=useState(false)
const handlepress=()=>{
 return setImmediate(() => {
    setAction(!action)
 }, 2000);
}


  return (
    <View>
       <ActivityIndicator size={100} animating={action} />
       <Button title='press' onPress={handlepress} />
    </View>
  )
}

export default ActivityLoader
