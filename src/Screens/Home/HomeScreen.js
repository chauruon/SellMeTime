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
    Modal,
} from 'react-native'
import React,{useEffect,useState,useRef} from 'react'

const data = [
    {
        id:1,
        image: require("../../../accset/image/sofa.jpg"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50K",
        typePrice:"VND",
        itemTypeof:[
            { Buy:"Buy"},
            { Thing:"Thing"},
        ],
    },
    {
        id:2,
        image: require("../../../accset/image/sofa.jpg"),
        desc: "Move sofa to living room and clean house. Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50K",
        typePrice:"VND",
        itemTypeof:[
            { Sell:"Sell"},
            { Time:"Time"},
        ],
    },
    {
        id:3,
        image: require("../../../accset/image/sofa.jpg"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50K",
        typePrice:"VND",
        itemTypeof:[
            { Buy:"Buy"},
            { Time:"Time"},
        ],
    },
    {
        id:4,
        image: require("../../../accset/image/sofa.jpg"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50K",
        typePrice:"VND",
        itemTypeof:[
            { Sell:"Sell"},
            { Talent:"Talent"},
        ],
    },
    {
        id:5,
        image: require("../../../accset/image/sofa.jpg"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50K",
        typePrice:"VND",
        itemTypeof:[
            { Sell:"Sell"},
            { Talent:"Talent"},
        ],
    },
    {
        id:6,
        image: require("../../../accset/image/sofa.jpg"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50K",
        typePrice:"VND",
        itemTypeof:[
            { Sell:"Sell"},
            { Talent:"Talent"},
        ],
    },
    {
        id:7,
        image: require("../../../accset/image/sofa.jpg"),
        desc: "Move sofa to living room and clean house",
        date: "2020/05/15 13:00:00",
        price: "50K",
        typePrice:"VND",
        itemTypeof:[
            { Sell:"Sell"},
            { Talent:"Talent"},
        ],
    },
]

const HomeScreen = () => {
    const [activity,setActivity] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const demoOnPress = (state) => {
        if (activity === state) {
            setActivity("");
        } else {
            setActivity(state);
        }
    }
    return (
            <View style={styles.container}> 
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.headerStyle}>
                        <View style={styles.btnView}>
                            <TouchableOpacity style={activity==='buy' ? styles.btnBuy : styles.btnBuyNormal} onPress={()=>demoOnPress('buy')}>
                                <Text style={styles.textBuy}>Buy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={activity==='sell' ? styles.btnSell : styles.btnSellNormal} onPress={()=>demoOnPress('sell')}>
                                <Text style={styles.textBuy}>Sell</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnEdit}>
                            <TouchableOpacity style={styles.btnSetting}  onPress={() => setModalVisible(true)} >
                                <Image style={{height:24,width:24}} source={require("../../../accset/icon/Sort.png")}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnSetting}>
                                <Image style={{height:24,width:24}} source={require("../../../accset/icon/Write.png")}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnLocation}>
                                <Image style={{height:24,width:24}} source={require("../../../accset/icon/Location.png")}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        style={{marginTop:10,}}
                        data={data}
                        keyExtractor={item=>item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.itemView}>
                                <Image style={styles.itemImage} source={item.image}/>
                                <View style={styles.infor}>
                                    <View style={styles.type}>
                                        {
                                            item.itemTypeof.map((val,idx)=>{
                                                return (
                                                    <>
                                                        {val.Buy === "Buy" ? 
                                                            <View key={idx + val.Buy} style={[styles.viewBuyThingSellTime,{backgroundColor:'rgba(37, 194, 110, 0.24)',flexDirection:"row"}]}>
                                                                <Text style={[styles.typeProduct,{color:"#18A348"}]}>{ val.Buy }</Text>
                                                            </View>
                                                            : 
                                                            null
                                                        }
                                                        {val.Sell == "Sell" ? 
                                                            <View key={idx +val.Sell} style={[styles.viewBuyThingSellTime,{backgroundColor:'#FFECE3'}]}>
                                                                <Text style={[styles.typeProduct,{color:"#F44B02"}]}>{val.Sell}</Text>
                                                            </View>
                                                            : null
                                                        }
                                                        {val.Talent == "Talent" ? 
                                                            <View key={idx + val.Talent} style={[styles.viewBuyThingSellTime,{backgroundColor:'#FFD5D5'}]}>
                                                                    <Text style={[styles.typeProduct,{color:"#DA000B"}]}>{val.Talent}</Text>
                                                            </View>
                                                            : null
                                                        }
                                                        {val.Thing == "Thing" ? 
                                                            <View key={idx + val.Thing} style={[styles.viewBuyThingSellTime,{backgroundColor:'#FFF8E4'}]}>
                                                                    <Text style={[styles.typeProduct,{color:"#FFB200"}]}>{val.Thing}</Text>
                                                            </View>
                                                            : null
                                                        }
                                                        {val.Time == "Time" ? 
                                                            <View key={idx + val.Time} style={[styles.viewBuyThingSellTime,{backgroundColor:'#E4F1FF'}]}>
                                                                <Text style={[styles.typeProduct,{color:"#2567F9"}]}>{val.Time}</Text>
                                                            </View>
                                                            : null
                                                        }
                                                    </>
                                                );
                                            })
                                        }
                                    </View>
                                    <Text style={styles.desc} numberOfLines={2}>{item.desc}</Text>
                                    <View style={styles.date}>
                                        <View style={{flex:4,}}>
                                            <Text>{item.date}</Text>
                                        </View>
                                        <View style={{flex:2,}}>
                                            <Text style={styles.typePrice}>{item.price} {item.typePrice}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                          )}
                    />
                </SafeAreaView>
            </View>
    )
}

export default HomeScreen
const {width,height} =Dimensions.get("window"); 
const heightImage = 105;
const widthItem = width - 20;

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
        backgroundColor:"#002665",
    },
    btnBuyNormal:{
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
        backgroundColor:"#002665",
    },
    btnSellNormal:{
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

    itemView:{
        borderRadius:12,
        marginBottom:10,
        width:widthItem,
        height:heightImage,
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        marginHorizontal:10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    itemImage:{
        height:heightImage,
        width:108.15,
        borderRadius:12,
    },
    desc:{
        color:"#011E32",
        height:47,
    },
    date:{
        flexDirection:"row",
        color:"rgba(0, 38, 101, 0.6)",
    },
    infor:{
        width: widthItem - 130,
        marginLeft:10,
        marginTop:9,
    },
    type:{
        flexDirection:'row',
        // backgroundColor:"#4CAF50",
    },
    typePrice:{
        color:"#2567F9",
        alignSelf:"flex-end",
        fontSize:14,
        fontWeight:"700"
    },
    typeProduct:{
        fontWeight:"400",
        fontSize:10,
    },
    viewBuyThingSellTime:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
        height:20,
        width:56,
        marginRight:10,
    },
    centeredView:{
        bottom:0,
        backgroundColor:"#9900EF"
    },
})