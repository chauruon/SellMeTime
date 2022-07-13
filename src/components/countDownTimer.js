import { View, Text,StyleSheet,StatusBar,Image, ImageBackground, TextInput,Dimensions, TouchableOpacity,SafeAreaView } from 'react-native'
import React,{useEffect,useState} from 'react'

export const coutnTime = () => {
    const [countDown, setCountDown] = useState(0);
    const [runTimer, setRunTimer] = useState(false);
    useEffect(()=>{
        let timerId;
        if (runTimer) {
            setCountDown(60 * 5);
            timerId = setInterval(() => {
                setCountDown((countDown) => countDown - 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    })

    if (countDown < 0 && runTimer) {
        // console.log("expired");
        setRunTimer(false);
        setCountDown(0);
    }

    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

}