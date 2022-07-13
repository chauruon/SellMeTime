/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, View, Text } from 'react-native';
import React from 'react';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import {store} from "./src/redux/store"
// import {store} from './src/redux/storeRedux'

import HomeScreen from "./src/Screens/HomeScreen"

const RNRedux = () => {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => RNRedux);
