import React from 'react'
import { Text, View } from 'react-native'
import WebView from 'react-native-webview'

const About = () => {
  return (
        <WebView source={{uri:"https://reactnative.dev/docs/navigation"}} />
  )
}

export default About
