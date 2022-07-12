import { View, Text,StyleSheet,StatusBar,Image, ImageBackground, TextInput,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient"
import {useNavigation} from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()

    return (
        <ImageBackground style={{
                flex:1,
            }} source={require("../../accset/image/backgroundColor.png")}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.logo}>
                <Image style={{height: 76,width:76,}}
                    source={require("../../accset/image/Logo.png")}/>
            </View>
            <View style={styles.boxLogin}>
                <Text style={styles.labelLogin}>Login</Text>
                <View style={styles.formLogin}>
                    <View style={styles.boxInput}>
                        <Image style={{width:16,height:16,}} 
                            source={require("../../accset/icon/Email.png")}/>
                        <TextInput 
                            style={styles.input}
                            placeholder='Email'
                        />
                    </View>
                    <Image style={{height:1,borderWidth:0.7,width:widthBox,}} source={require("../../accset/icon/Line.png")}/>
                </View>
                <View style={styles.formLogin}>
                    <View style={styles.boxInput}>
                        <Image style={{width:16,height:16,}} 
                            source={require("../../accset/icon/Lock.png")}/>
                        <TextInput 
                            style={styles.input}
                            placeholder='Password'
                        />
                    </View>
                    <Image style={{height:1,borderWidth:0.7,width:widthBox,}} source={require("../../accset/icon/Line.png")}/>
                </View>
                <TouchableOpacity style={styles.bntLogin}>
                    <Text style={{color:"white",fontWeight:"700"}}>Login</Text>
                </TouchableOpacity>
                <View style={styles.boxInfor}>
                    <View style={{flex:3,}}>
                        <TouchableOpacity  onPress={()=>navigation.navigate("RegisterScreen")}>
                            <Text style={{color:"#011E32"}}>New Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:3,}}>
                        <TouchableOpacity style={{flex:3,alignItems:"flex-end",}} onPress={()=>navigation.navigate("FindPassword")}>
                            <Text style={{color: "#DA000B"}}>Find Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
export default LoginScreen


const {width,height} = Dimensions.get("window");
const widthBox= width - 60;
const heightBoxLogin = height/2 * 1.4;

const styles = StyleSheet.create({
    logo:{
        justifyContent:"center",
        alignItems:"center",
        top:110,
    },
    boxLogin:{
        // height:500,
        height: heightBoxLogin,
        bottom:-200,
        backgroundColor:"white",
        borderTopLeftRadius:90,
        justifyContent:"center",
        alignItems:"center",
    },
    formLogin:{
        paddingHorizontal:20,
        marginHorizontal:20,
        justifyContent:"center",
        alignItems:"center",
        width:widthBox,
        // backgroundColor:"#002665",
    },
    labelLogin:{
        // backgroundColor:"#002665",
        color:"#002665",
        fontWeight:"500",
        fontSize:22,
    },
    boxInput:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"#50c775",
    },
    input:{
        alignSelf:"flex-start",
        width:width - 110,
        marginHorizontal:10,
    },
    bntLogin:{
        backgroundColor:"#002665",
        marginTop:30,
        width:widthBox,
        height:50,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
    },
    boxInfor:{
        flexDirection:"row",
        // backgroundColor:'#194d33',
        width:widthBox,
        marginTop:10,
    },
})