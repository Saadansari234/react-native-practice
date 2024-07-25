import React from 'react'
import { SafeAreaView, View } from 'react-native'
import About from './screens/About'

const Layout = ({ Children, about }) => {
  return (
    <SafeAreaView>
      <View>
        <About about={about} />
        {Children}
      </View>
    </SafeAreaView>
  )
}

export default Layout
