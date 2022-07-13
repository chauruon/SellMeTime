import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native'
import React,{useEffect,useState} from 'react'

const HomeScreen = () => {
    return (
            <View style={styles.container} >
                <Text>HomeScreen</Text>
            </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})