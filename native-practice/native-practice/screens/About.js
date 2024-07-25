import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const About = ({about}) => {
    return (
        <View >
            <View style={styles.header}>
                <Text style={styles.header.headerText}>{about}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
     backgroundColor: "#1F2328"
    }, 
    header: {
        backgroundColor: "#1F2328",
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:8,
        headerText: {
            fontSize: 24,
            color:"white",
            fontWeight:"600",
        }
    }
})

export default About
