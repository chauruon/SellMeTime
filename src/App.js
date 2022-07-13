import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from "./Screens/RegisterScreen"
import FindPassword from "./Screens/FindPassword"
import HomeScreen from "./Screens/HomeScreen";
import HomeScreenToolkit from "./Screens/HomeScreenToolkit"

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreenToolkit" screenOptions={{headerShown: false}} >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="FindPassword" component={FindPassword} />
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='HomeScreenToolkit' component={HomeScreenToolkit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
