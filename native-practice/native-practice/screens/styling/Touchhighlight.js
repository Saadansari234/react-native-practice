// import React from 'react'
// import { View, TouchableHighlight,Text } from 'react-native'

// const Touchhighlight = () => {
//   return (
//    <View>
//      <TouchableHighlight>
//        <Text
//        style={{backgroundColor:"gold", margin:10, padding:10,textAlign:"center", shadowColor:"black", elevation:5, borderRadius:5,}}
//        >Press It</Text>
//      </TouchableHighlight>
//    </View>
//   )
// }

// export default Touchhighlight
import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Touchhighlight = () => {
  const onPressButton = () => {
    console.log('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="pink" // Highlight color when pressed
        onPress={onPressButton}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Touchhighlight;