import React, { useEffect, useState } from 'react'
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../redux/Action'
import Product from './Product'
const Projects = () => {
    
    const Products = [
        {
            Name: "Iphone1",
            price: 30000,
        },
        {
            Name: "Iphone2",
            price: 40000,
        },
        {
            Name: "Iphone3",
            price: 50000,
        },
        {
            Name: "Iphone4",
            price: 60000,
        },
        {
            Name: "Iphone5",
            price: 70000,
        },
        {
            Name: "Iphone6",
            price: 80000,
        },
    ]

   

   
    return (
        <View>
            {
                Products.map((items, index) => {
                    return (
                      <Product key={index} items={items} />
                    )
                }) 
            }
        </View>
    )
}


export default Projects
