import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from "./Screens/Register/RegisterScreen"
import FindPassword from "./Screens/FindPassword/FindPassword"
import HomeScreenRN_Redux from "./Screens/HomeScreenRN_Redux";
import HomeScreenToolkit from "./Screens/HomeScreenToolkit";
import tabScreen from "./Screens/TabScreen/TabNavigation";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        // initialRouteName=""
        screenOptions={{headerShown: false}} >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="FindPassword" component={FindPassword} />
        <Stack.Screen name='TabScreen' component={tabScreen}/>
        <Stack.Screen name='HomeScreenRN_Redux' component={HomeScreenRN_Redux}/>
        <Stack.Screen name='HomeScreenToolkit' component={HomeScreenToolkit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
