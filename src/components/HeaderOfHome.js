import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export const HeaderOwnHome = () => {
    return (
        <View>
            <TouchableOpacity style={styles.btnBuy}>
                <Text>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBuy}>
                <Text>Buy</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnBuy:{
        width:80,
        height:80,
        borderWidth:1,
        borderColor:"rgba(0, 38, 101, 0.24)",
    }
})