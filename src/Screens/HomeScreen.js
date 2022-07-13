import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native'
import React,{useEffect,useState} from 'react'

const data = [
    {
        id:1,
        image: require("../../accset/image/showrom.png"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50k",
        typePrice:"VND",
    },
    {
        id:1,
        image: require("../../accset/image/showrom.png"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50k",
        typePrice:"VND",
    },
    {
        id:1,
        image: require("../../accset/image/showrom.png"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50k",
        typePrice:"VND",
    },
    {
        id:1,
        image: require("../../accset/image/showrom.png"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50k",
        typePrice:"VND",
    },
    {
        id:1,
        image: require("../../accset/image/showrom.png"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50k",
        typePrice:"VND",
    },
]

const HomeScreen = () => {
    return (
            <View style={styles.container}> 
                {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.headerStyle}>
                        <View style={styles.btnView}>
                            <TouchableOpacity style={styles.btnBuy}>
                                <Text style={styles.textBuy}>Buy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnSell}>
                                <Text style={styles.textBuy}>Sell</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnEdit}>
                            <TouchableOpacity style={styles.btnSetting}>
                                <Image style={{height:24,width:24}} source={require("../../accset/icon/Sort.png")}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnSetting}>
                                <Image style={{height:24,width:24}} source={require("../../accset/icon/Write.png")}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnLocation}>
                                <Image style={{height:24,width:24}} source={require("../../accset/icon/Location.png")}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        keyExtractor={item=>item.id.toString()}
                        renderItem={(item)=>{
                            <View>
                                <Text>{item.desc}</Text>
                            </View>
                        }}
                    />
                </SafeAreaView>
            </View>
    )
}

export default HomeScreen
const {width,height} =Dimensions.get("window"); 
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    safeAreaView:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
    headerStyle:{
        flexDirection:"row",
        marginHorizontal:10,
    },
    btnView:{
        flexDirection:"row",
        // alignSelf:"flex-start",
        flex:3,
    },
    btnBuy:{
        borderWidth:1,
        borderColor:"rgba(0, 38, 101, 0.24)",
        height:35,
        width:55,
        borderRadius:86,
        justifyContent:"center",
        alignItems:"center",
    },
    textBuy:{
        fontWeight:"400",
        fontSize:14,

    },
    btnSell:{
        borderWidth:1,
        borderColor:"rgba(0, 38, 101, 0.24)",
        height:35,
        width:55,
        borderRadius:86,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
    },
    btnEdit:{
        flexDirection:'row',
        alignSelf:"flex-end",
        // backgroundColor:"#1273DE",
        flex:3,
        right: -width/3 + 85,
    },
    btnSetting:{
        backgroundColor:"#E4F1FF",
        height:40,
        width:40,
        borderRadius:86,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
    },
    btnLocation:{
        backgroundColor:"#002665",
        height:40,
        width:40,
        borderRadius:86,
        justifyContent:"center",
        alignItems:"center",
    },
})