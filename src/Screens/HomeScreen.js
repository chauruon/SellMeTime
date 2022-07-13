import { View, Text,StyleSheet,Dimensions,Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_COUNT, DECREMENT_COUNT } from '../redux/actions/countAction';
// import {change, getNumber} from '../redux/actions/numberAction'


const HomeScreen = () => {
    const dispatch = useDispatch();
    const number = useSelector((store) => store.count.count);

    const decrementCount =()=> {
        dispatch(DECREMENT_COUNT());
    }
    const incrementCount =()=> {
        dispatch(INCREMENT_COUNT());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title_text}>Counter App</Text>
            <Text style={styles.counter_text}>{number}</Text>
    
            <TouchableOpacity onPress={()=>incrementCount()} style={styles.btn}>
                <Text style={styles.btn_text}> Increment </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>decrementCount()} style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
                <Text style={styles.btn_text}> Decrement </Text>
            </TouchableOpacity>
      </View>
    )
}

  
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 50,
    },
    title_text: {
        fontSize: 40,
        fontWeight: '900',
        marginBottom: 55,
    },
    counter_text: {
        fontSize: 35,
        fontWeight: '900',
        margin: 15,
    },
    btn: {
        backgroundColor: '#086972',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    btn_text: {
        fontSize: 23,
        color: '#fff',
    },
});