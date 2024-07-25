import React from 'react'
import { View, StatusBar } from 'react-native'

const Statusbars = () => {
  return (
    <View>
        <StatusBar 
        backgroundColor={"black"}
        barStyle={"dark-content"}
        // translucent={true}
        // hidden={true}
        // animated={true}
        // networkActivityIndicatorVisible={true}
        // showHideTransition={"fade"}
        // translucent={true}
        />
    </View>
  )
}

export default Statusbars
