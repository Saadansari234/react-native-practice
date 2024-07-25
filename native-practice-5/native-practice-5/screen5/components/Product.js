import React, { useEffect, useState } from 'react'
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../redux/Action'
import { RemoveFromCart } from '../../redux/Action'
const Product = (props) => {

    const {items}= props


    const [isAdd, setIsAdd] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(state => state.addcart)

    const Addpress = (items) => {
        dispatch(AddToCart(items))
        // setIsAdd(true)

    }
    const removepress=(items)=>{
        dispatch(RemoveFromCart(items))
        // setIsAdd(false)
    }

    useEffect(()=>{
     let result= data.filter((element)=>{
        return element.Name === items.Name
     })
     if (result.length) {
        setIsAdd(true)
     }else{
        setIsAdd(false)
     }
    },[data])
   
    return (
        <View  style={style.container}>
            <Text>{items.Name}</Text>
            <Text>{items.price}</Text>

            {
                isAdd ?
                    <TouchableOpacity style={style.button} onPress={()=> removepress(items)}>
                        <Text style={style.buttontext} >remove from Cart</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={style.button} onPress={() => Addpress(items)}>
                        <Text style={style.buttontext}  >Add To Cart</Text>
                    </TouchableOpacity>
            }

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10
    },
    button: {
        paddingVertical: 10,
        backgroundColor: "green",
        width: 100,
        borderRadius: 5
    },
    buttontext: {
        textAlign: "center",
        color: "#fff",

    }

})



export default Product
