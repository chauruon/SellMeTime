import { View, Text,StyleSheet,Dimensions,Image, FlatList, } from 'react-native'
import React from 'react'

const data = [
    {
        id:1,
        desc:"sadfasdf",
        type:[
            "buy","thing"
        ],
        date: "2020/05/15 13:00:00",
        price:5000000000,
        image:require("../../accset/image/showrom.png")
    },
    {
        id:2,
        desc:"sadfasdf",
        type:[
            "buy","thing"
        ],
        date: "2020/05/15 13:00:00",
        price:5000000000,
        image:require("../../accset/image/showrom.png")
    },
    {
        id:3,
        desc:"sadfasdf",
        type:[
            "buy","thing"
        ],
        date: "2020/05/15 13:00:00",
        price:5000000000,
        image:require("../../accset/image/showrom.png")
    },
]

const HomeScreen = () => {
    return (
        <View style={styles.constainer}>
            <Text>HomeScreen</Text>
            <FlatList data={data}
                keyExtractor = {item => item.id}
                renderItem={(item)=>{
                    return(
                        <View>
                            {/* <Image su/> */}
                        </View>
                    )
                }}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})