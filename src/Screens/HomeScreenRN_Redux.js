import { View, Text,StyleSheet,Dimensions,Image, FlatList, TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_COUNT, DECREMENT_COUNT } from '../redux/actions/countAction';
import {countDown} from "../components/countDown"


const HomeScreenRN_Redux = () => {
    const dispatch = useDispatch();
    const number = useSelector((store) => store.count.count);

    const decrementCount =()=> {
        dispatch(DECREMENT_COUNT());
    }
    const incrementCount =()=> {
        dispatch(INCREMENT_COUNT());
    }

    const [countDown, setCountDown] = React.useState(0);
    useEffect(() => {
        let timerId;
        setCountDown(60 * 0.1);
        timerId = setInterval(() => {
            setCountDown((countDown) => countDown - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        if (countDown < 0) {
        console.log("expired");
        setCountDown(0);
        }
    }, [countDown]);
    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.title_text}>Counter App</Text>
            <Text style={styles.counter_text}>{number}</Text>
            <Text style={styles.title_text}>Count Dowm</Text>
            <Text style={styles.counter_text}>{minutes}:{seconds}</Text>
            {/* <Text style={styles.counter_text}>{countDownTimer}</Text> */}

            <View style={{
                flexDirection:"row",

            }}>
                <TouchableOpacity onPress={()=>incrementCount()} style={styles.btn}>
                    <Text style={styles.btn_text}> Increment </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>decrementCount()} style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
                    <Text style={styles.btn_text}> Decrement </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={()=>togglerTimer()} style={styles.btn}>
                    <Text style={styles.btn_text}>{runTimer ? "Stop" : "Start"} </Text>
                </TouchableOpacity> */}
            </View>
      </View>
    )
}

  
export default HomeScreenRN_Redux;

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