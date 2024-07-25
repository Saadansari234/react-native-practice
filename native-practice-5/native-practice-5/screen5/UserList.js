import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createUserList } from '../redux/Action'
import { useDispatch, useSelector } from 'react-redux'


const UserList = () => {

  const dispatch= useDispatch()
  const userListData= useSelector((state)=>state.userReducer)

  useEffect(()=>{
    dispatch(createUserList())
  },[])
  console.warn(userListData);



  return (
   <View>
    <ScrollView>
         {
          userListData.length? 
          userListData.map((items)=>{
            return items.users.map((elem)=>{
              return (
                <Text>{elem.firstName}</Text>
              )
            })
          }):null
         }
    </ScrollView>
     
   </View>
  )
}

export default UserList
