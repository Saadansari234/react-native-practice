import React, { useEffect, useState } from 'react'
import { Button, View,Text } from 'react-native'

const Update = () => {
   const [state,setState]=useState(0)
    useEffect(()=>{
        console.warn(state)
        // if we leave below aray empty it will only render while reloding the page 
        // and if we fill this array with state and propsit will render only when stte and props get updated 
    },[])

  return (
   <View>
    <Text>here is count:{state} </Text>
     <Button title='increase' onPress={()=> setState(state+1)}/>
   </View>
  )
}

export default Update
