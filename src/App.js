import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./Screens/HomeScreen"
import RegisterScreen from "./Screens/RegisterScreen"
import FindPassword from "./Screens/FindPassword"

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="FindPassword" component={FindPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
