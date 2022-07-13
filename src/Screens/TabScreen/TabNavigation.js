import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from '../HomeScreen';
import Activity from '../Activity'
import Chat from '../Chat'
import History from '../History'
import Profile from '../Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                height: 55,
            },
            tabBarLabelStyle: {
                fontSize: 10,
                fontWeight: "500",
                marginBottom: 10,
                // backgroundColor:"#ff00e6"
            }
        }}>
            <Tab.Screen
                name="List"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'List',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../../../accset/icon/Menu.png")} style={focused ? styles.list : styles.NotList} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Activity"
                component={Activity}
                options={{
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../../../accset/icon/Activity.png")} style={focused ? styles.activityLive : styles.NotActivity} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../../../accset/icon/Chat.png")} style={focused ? styles.ChatActi : styles.notChatActi} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color }) => (
                        <Image source={require("../../../accset/icon/History.png")} color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Image source={require("../../../accset/icon/Profile.png")} color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    list: {

    },
    NotList: {
        tintColor: " rgba(0, 38, 101, 0.24)"
    },
    activityLive: {
        tintColor: '#2567F9',
    },
    NotActivity: {

    },
    ChatActi: {
        tintColor: "#2567F9"
    },
    notChatActi: {
       
    },
})