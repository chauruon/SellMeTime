import { View, Text,Image, TouchableOpacity,Dimensions,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export const Header = ({leftSide = false,rightSide = false, label}) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            {leftSide && (
                <TouchableOpacity style={styles.leftSide} onPress={()=> navigation.goBack()}>
                    <Image style={{height:24,width:24}} source={require("../../../accset/icon/Arrow.png")}/>
                </TouchableOpacity>
            )}
            
            {label ? 
                <View style={styles.title}>
                    <Text style={styles.label}>{label}</Text>
                </View>
                : 
                <View style={styles.label}></View>
            }

            {rightSide && (
                <TouchableOpacity style={styles.rightSide} onPress={()=>{}}>
                    <Image style={{height:24,width:24}} source={require("../../../accset/icon/Arrow.png")}/>
                </TouchableOpacity>
            )}
        </View>
    )
}


const {width,height} = Dimensions.get("window");

const twoSide = 15;
const widthLabel = width/2 * 1.54;

const styles = StyleSheet.create({
    container:{
        height:40,
        width: width,
        flexDirection:"row",
    },
    leftSide:{
        marginLeft:twoSide,
        width:30,
        justifyContent:"center",
        alignItems:"center",
    },
    rightSide:{
        width:30,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        width: widthLabel,
        justifyContent:"center",
        alignItems:"center",
    },
    label:{
        fontWeight:"700",
        fontSize:20,
        color:"#FFFFFF",
    },
})