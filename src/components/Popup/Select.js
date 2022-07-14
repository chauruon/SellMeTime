import { 
    View,
    Text,
    Animated,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    Easing,
} from 'react-native'
import React,{
    useState,
    useEffect,
    useRef
} from 'react'
import { RadioButton } from 'react-native-paper';

const Select = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isTop, setIsTop] = useState(true);
    const [checked, setChecked] = useState('');


    const startAnimation = toValue => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            setIsTop(!isTop);
        })
    }
    // useEffect(() => {
    //     startAnimation(isTop ? 1 : 0);
    // }, [isTop]);
    return (
        <View style={{
            justifyContent:"center",
            alignItems:"center",
        }}>
            <TouchableOpacity style={{
                width:60,
                height:30,
                backgroundColor:'#008b02',
                justifyContent:"center",
                alignItems:"center",
                top:200,
            }}
            onPress={startAnimation}>
                <Text>Show</Text>
            </TouchableOpacity>
            <Animated.View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btnClose}>
                        <Text style={styles.textClodeAndDone}>Close</Text>
                    </TouchableOpacity>
                    <View style={styles.label}>
                        <Text style={styles.textLabel}>Select</Text>
                    </View>
                    <TouchableOpacity style={styles.btnDone}>
                        <Text style={{color:"#2567F9"}}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxView}>
                    <View style={styles.itemBox}>
                        <Text style={styles.item}>All Time</Text>
                        <RadioButton
                            value="first"
                            status={ checked  ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('AllTime')}
                        />
                    </View>
                    <View style={styles.itemBox}>
                        <Text style={styles.item}>Time</Text>
                        <RadioButton
                            value="first"
                            status={ checked ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Time')}
                        />
                    </View>
                    <View style={styles.itemBox}>
                        <Text style={styles.item}>Thing</Text>
                        <RadioButton
                            value="first"
                            status={ checked  ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Thing')}
                        />
                    </View>
                    <View style={styles.itemBox}>
                        <Text style={styles.item}>Talent</Text>
                        <RadioButton
                            value="first"
                            status={ checked  ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Talent')}
                        />
                    </View>
                </View>
            </Animated.View>
        </View>
    )
}

export default Select

const {width,height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        height:280,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        backgroundColor:"#FFFFFF",
        // backgroundColor:'#8BC34A',
        bottom: - (height/2 + 110),
    },
    header:{
        flexDirection:'row',
        height:40,
        // backgroundColor:"#8ED1FC",
        marginTop:15,
        paddingHorizontal:15,
    },
    label:{
        width:"70%",
        // backgroundColor:"#C2185B",
        alignItems:"center",
        justifyContent:'center',
    },
    textLabel:{
        fontSize:16,
        fontWeight:"700",
        color:"#011E32"
    },
    btnClose:{
        width:"15%",
        alignItems:"center",
        justifyContent:'center',
    },
    btnDone:{
        width:"15%",
        alignItems:"center",
        justifyContent:'center',
    },
    textClodeAndDone:{
        color:"#2567F9",
        fontSize:14,
        fontWeight:"400",
    },
    boxView:{
        marginHorizontal:20,
    },
    itemBox:{
        flexDirection:'row',
        // backgroundColor:"#0693E3",
        alignItems:"center",
       
    },
    item:{
        width: width - 80,
        color:"#011E32",
        fontSize:14,
        fontWeight:"400",
    },
})
