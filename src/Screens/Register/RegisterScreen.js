import { View, Text,StyleSheet,StatusBar,Image, ImageBackground, TextInput,Dimensions, TouchableOpacity,SafeAreaView } from 'react-native'
import React,{useEffect,useState} from 'react'
import LinearGradient from "react-native-linear-gradient";
import moment from 'moment';
import { Header } from '../../components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { Formik, Form, Field } from 'formik';
import {signUpValidationSchema} from "../../ultil/validation";
const RegisterScreen = () => {


    return (
        <ImageBackground style={{flex:1,}} source={require("../../../accset/image/backgroundColor.png")}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <SafeAreaView style={styles.safeAreaView}>
                <Header label="Register" leftSide={true}/>
                <Formik
                    validationSchema={signUpValidationSchema}
                    initialValues={{ email: '', password: '',confirmPassword:'' }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors,touched, }) => (
                        <View style={styles.boxLogin}>
                            <View style={styles.formLogin}>
                                <View style={styles.boxInput}>
                                    <Image style={{width:16,height:16,}} 
                                        source={require("../../../accset/icon/Lock.png")}/>
                                    <TextInput 
                                        style={styles.input}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur("password")}
                                        secureTextEntry={true}
                                        value={values.password}
                                        placeholder='Password'
                                    />
                                    {values.password ? 
                                        (errors.confirmPassword == undefined ? 
                                            <TouchableOpacity style={styles.btnNotConfirm}></TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.btnNotCheck}>
                                                <Image style={{width:15,height:15,}} source={require("../../../accset/icon/check.png")}/>
                                            </TouchableOpacity>
                                        )
                                        :
                                        <TouchableOpacity style={styles.btnNotCheck}>
                                            <Image style={{width:15,height:15,}} source={require("../../../accset/icon/check.png")}/>
                                        </TouchableOpacity>
                                    }
                                </View>
                                <Image style={{height:1,borderWidth:0.7,width:widthBox,}} source={require("../../../accset/icon/Line.png")}/>
                            </View>
                            <View style={styles.formLogin}>
                                <View style={styles.boxInput}>
                                    <Image style={{width:16,height:16,}} 
                                        source={require("../../../accset/icon/Lock.png")}/>
                                    <TextInput 
                                        style={styles.input}
                                        onChangeText={handleChange('confirmPassword')}
                                        onBlur={handleBlur("confirmPassword")}
                                        secureTextEntry={true}
                                        value={values.confirmPassword}
                                        placeholder='Password Confirm'
                                    />
                                    {console.log(`errors password: ${JSON.stringify(errors.password)}`)}
                                    {console.log(`errors confirmPassword: ${JSON.stringify(errors.confirmPassword)}`)}
                                    {errors.confirmPassword !== undefined ? 
                                        <TouchableOpacity style={styles.btnCheck}>
                                            <Image style={{width:15,height:15,}} source={require("../../../accset/icon/check.png")}/>
                                        </TouchableOpacity>
                                        : 
                                        <TouchableOpacity style={styles.btnNotConfirm}>
                                            {/* <Image style={{width:15,height:15,}} source={require("../../accset/icon/check.png")}/> */}
                                        </TouchableOpacity>
                                    }
                                </View>
                                <Image style={{height:1,borderWidth:0.7,width:widthBox,}} source={require("../../../accset/icon/Line.png")}/>
                            </View>
                            <View style={styles.formLogin}>
                                <View style={styles.boxInput}>
                                    <Image style={{width:16,height:16,}} 
                                        source={require("../../../accset/icon/Email.png")}/>
                                    <TextInput 
                                        style={styles.input}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur("email")}
                                        value={values.email}
                                        placeholder='Email'
                                    />
                                    {values.email ?
                                        <LinearGradient style={{borderRadius:5,}} colors={['#002665', '#003A9A']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                            <TouchableOpacity style={styles.btnVeryfy}>
                                                <Text style={{color:"#FFFFFF"}}>Veryfy</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                        :
                                        <TouchableOpacity style={styles.btnVeryfyNotAcctive}>
                                            <Text style={{color:"#FFFFFF"}}>Veryfy</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                                <Image style={{height:1,borderWidth:0.7,width:widthBox,}} source={require("../../../accset/icon/Line.png")}/>
                            </View>
                            <View style={styles.formLogin}>
                                <View style={styles.boxInput}>
                                    <Image style={{width:16,height:16,}} 
                                        source={require("../../../accset/icon/Shield.png")}/>
                                    <TextInput 
                                        style={styles.input}
                                        placeholder='Verification code'
                                    />
                                    
                                    <View style={styles.btnVeryfy}>
                                        {/* <Text style={styles.coutnDownTime}>{minutes}:{seconds}</Text>
                                        <Text style={styles.coutnDownTime}>{count()}</Text> */}
                                    </View>
                                </View>
                                <Image style={{height:1,borderWidth:0.7,width:widthBox,}} source={require("../../../accset/icon/Line.png")}/>
                            </View>
                            <View style={styles.boxInfor}>
                                <View style={{
                                    flexDirection:"row",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    }}>
                                    <Image style={{width:5,height:5, marginRight:10,}} source={require("../../../accset/icon/dot.png")}/>
                                    <Text style={{
                                        color:"rgba(0, 38, 101, 0.6)",
                                    }}>After entering the correct password in the format, the Enter Email field becomes active.</Text>
                                </View>
                                <View style={{
                                    flexDirection:"row",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    }}>
                                    <Image style={{width:5,height:5, marginRight:10,}} source={require("../../../accset/icon/dot.png")}/>
                                    <Text style={{
                                        color:"rgba(0, 38, 101, 0.6)",
                                    }}>
                                        Passwords must each contain at least one uppercase letter, one lowercase letter, a special character, and a number, and must be between 5 and 20 characters.
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection:"row",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    }}>
                                    <Image style={{width:5,height:5, marginRight:10,}} source={require("../../../accset/icon/dot.png")}/>
                                    <Text style={{
                                        color:"rgba(0, 38, 101, 0.6)",
                                    }}>
                                        Email verification code will expire 5 minutes after request.
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.bntLogin} onPress={handleSubmit}>
                                <Text style={{color:"white",fontWeight:"700"}}>Create</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </SafeAreaView>
        </ImageBackground>
    )
}
const {width,height} = Dimensions.get("window");
const widthBox= width - 60;
const heightBoxLogin = height/2 * 1.9;
export default RegisterScreen

const styles = StyleSheet.create({
    safeAreaView:{
        flex: 1,
        // backgroundColor: "#FCB900",
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
    boxLogin:{
        height: heightBoxLogin,
        bottom:-100,
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
    boxInput:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"#50c775",
    },
    input:{
        alignSelf:"flex-start",
        width:width - 190,
        marginHorizontal:10,
        // backgroundColor:"#008b02"
    },
    btnNotCheck:{
        width:65,
        height:25,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"#18A348",
        backgroundColor:"rgba(0, 38, 101, 0.24)",
    },
    btnCheck:{
        width:65,
        height:25,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#18A348",
        // backgroundColor:"rgba(0, 38, 101, 0.24)",
    },
    btnNotConfirm:{
        width:65,
        height:25,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
    },
    btnVeryfy:{
        width:65,
        height:25,
        justifyContent:"center",
        alignItems:"center",
    },
    btnVeryfyNotAcctive:{
        width:65,
        height:25,
        borderRadius:5,
        backgroundColor:"rgba(0, 38, 101, 0.24)",
        justifyContent:"center",
        alignItems:"center",
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
    coutnDownTime:{
        color:"#DA000B",
        fontSize:14,
        // lineHeight:105
    },
    boxInfor:{
        width:widthBox,
        marginTop:15,
    },
})