import React, { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Radios = () => {

  const [select, seSelect] = useState(0)

  const data= [
    {
      course:"Java",
      no:1,
    },
    {
      course:"python",
      no:2,
    },
    {
      course:"Rust",
      no:3,
    }
  ]

  return (
    <View>
       {
   data.map((elem,index)=>{
  return(
      <TouchableOpacity key={index} onPress={() => seSelect(elem.no)}>

        <View style={mystyle.main}>
          <View style={mystyle.radio}>
            {
              select === elem.no ? <View style={mystyle.radiobg}></View> : null
            }

          </View>
          <Text style={mystyle.radioText}>{elem.course}</Text>
        </View>

      </TouchableOpacity>
  )
   })
       }

      
    </View>

  )
}

const mystyle = StyleSheet.create({

  main: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  radio: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center"

  },
  radiobg: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "black",

  },
  radioText: {
    fontSize: 20
  }
})

export default Radios
