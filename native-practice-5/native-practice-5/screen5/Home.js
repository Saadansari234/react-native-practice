import React from 'react'
import { View, Text } from 'react-native'
import Projects from './components/Projects'
import Appbar from './components/Appbar'
const Home = ({ navigation }) => {
  return (
    <View>
      <Appbar navigation={navigation} />
      <Projects />
    </View>
  )
}

export default Home
