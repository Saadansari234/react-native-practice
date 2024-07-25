import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FlatLists from './screens/FlatList';
import Section from './screens/Section';
import Update from './screens/lifecycle/Update';
import Layout from './Layout';
import Mount from './screens/lifecycle/Mount';
import Unmount from './screens/lifecycle/Unmount';
import Flexbox from './screens/styling/Flexbox';
import Buttons from './screens/styling/Buttons';
import Radios from './screens/styling/Radios';
import Checkbox from './screens/styling/Checkbox';
import ActivityLoader from './screens/styling/ActivityLoader';
import Statusbars from './screens/styling/Statusbars';
import Touchhighlight from './screens/styling/Touchhighlight';


export default function App() {
  return (

    <View style={styles.container}>
      {/* <Layout about={"componentDidUpdate"} Children={<Update/>} /> */}
      {/* <Layout about={"ComponentMount"} Children={<Mount/>} />  */}
      {/* <Layout about={"ComponentUnmountMount"} Children={<Unmount/>} />  */}
      {/* <Layout about={"flexbox"} Children={<Flexbox/>}/> */}
      {/* <Flexbox/> */}
      {/* <Layout about={"Touchable-Buttons"} Children={<Buttons/>}/> */}
      {/* <Layout about={"Touchable-Buttons"} Children={<Radios />} /> */}
      {/* <Radios/> */}
      {/* <Layout about={"Touchable-Buttons"} Children={<Checkbox />} /> */}
      {/* <Layout about={"Touchable-Buttons"} Children={<Library />} /> */}
      {/* <Layout about={"Touchable-Buttons"} Children={<Radios/>} />
      <Layout about={"Touchable-Buttons"} Children={<Checkbox/>} />

      <Layout about={"Touchable-Buttons"} Children={<ActivityLoader/>} /> */}
      {/* <Layout about={"Touchable-Buttons"} Children={<Statusbars/>} /> */}
      <Layout about={"Touchable-Buttons"} Children={<Touchhighlight/>} />

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
