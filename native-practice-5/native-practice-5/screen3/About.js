
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

const About = () => {
    const [data, setData] = useState([])
    const getAPI = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url)
        result = await result.json()
        setData(result)
    }

    useEffect(() => {
        getAPI()
    }, [])

    return (
        <View>
            <Text style={{ paddingVertical: 20, paddingHorizontal: 10, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, }}>About Page</Text>
            {/* <ScrollView >
            {
              data.length ? 
              data.map((elem)=>
              <View style={{margin:10,}}>
                <Text style={{backgroundColor:"darkgray"}}>id:{elem.id}</Text>
                <View style={{backgroundColor:"lightgray"}}>
                <Text>Title:{elem.title}</Text>
                <Text>Body:{elem.body}</Text>
                </View>
              </View>
              ):null
            }
            </ScrollView> */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()} // Assuming id is unique
                renderItem={({ item }) => (
                    <View style={{ margin: 10 }}>
                        <Text style={{ backgroundColor: "darkgray" }}>id:{item.id}</Text>
                        <View style={{ backgroundColor: "lightgray" }}>
                            <Text>Title:{item.title}</Text>
                            <Text>Body:{item.body}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default About
