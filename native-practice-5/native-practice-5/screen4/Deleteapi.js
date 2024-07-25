import React, { useEffect, useState } from 'react'
import { View, Text, Button, ScrollView, Modal, StyleSheet, TextInput } from 'react-native'
import Putapi from './Putapi'
const Deleteapi = () => {
  const [data, setdata] = useState()
  const [showModal,SetShowModal]=useState(false)
  const [selectedData,setSelectedData]=useState(undefined)
  const callAPI = async () => {
    const url = "http://192.168.0.107:3000/userData"
    let result = await fetch(url)
    result = await result.json()
    setdata(result)

  }

  const DelAPI = async (id) => {
    const url = "http://192.168.0.107:3000/userData"
    let result = await fetch(`${url}/${id}`, {
      method: "delete"
    })
    callAPI()
    // result = await result.json()
    // setdata(result)
  }


  const UpdateAPI=(data)=>{
    SetShowModal(true)
    setSelectedData(data)
  }

  

  useEffect(() => {
    callAPI()
  }, [])



  return (
    <View>
      <View style={{ flexDirection: "row", gap: 5, backgroundColor: "rgba(50,50,50,.5)" }}>
        <View style={{ flex: 1 }}><Text>name</Text></View>
        <View style={{ flex: 1 }}><Text>age</Text></View>
        <View style={{ flex: 1 }}><Text>email</Text></View>
        <View style={{ flex: 1, opacity: 0 }}><Text>age</Text></View>
        <View style={{ flex: 1, opacity: 0 }}><Text>email</Text></View>
      </View>

      <ScrollView>
        {data ?
          data.map((elem) => {
            return (
              <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }} key={elem.id}>
                <View style={{ flex: 1 }}><Text>{elem.name}</Text></View>
                <View style={{ flex: 1 }}><Text>{elem.age}</Text></View>
                <View style={{ flex: 1 }}><Text>{elem.email}</Text></View>
                <Button title='Delete' onPress={() => DelAPI(elem.id)} />
                <Button title='Update' onPress={()=> UpdateAPI(elem)}  />
              </View>
            )
          }) : null
        }
      </ScrollView>

      <Modal visible={showModal} transparent={true} >
        <Putapi SetShowModal={SetShowModal} selectedData={selectedData} 
        //   Putapi={Putapi}
         callAPI={callAPI}
        />
      </Modal>
    </View>
  )
}




export default Deleteapi

