
import { useEffect, useState } from 'react';
import { View,Text } from 'react-native';
const Home=()=>{

    const[data,setData]=useState(undefined)
    
    const APIfunc = async ()=>{
        const APIUrl= "https://jsonplaceholder.typicode.com/todos/1"
     let result=  await fetch(APIUrl)
      result = await result.json()
     setData(result)
    }

    useEffect(()=>{
     APIfunc()
    },[])

    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Home Page</Text>
      {
         data ? <View>
          <Text>id:{data.userId}</Text>
          <Text>id:{data.id}</Text>
          <Text>id:{data.title}</Text>
         </View>:null
      }
    </View>
    )
}
export default Home