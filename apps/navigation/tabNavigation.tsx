import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import HistoryScreen from '../screen/HistoryScreen';
import SearchScreen from '../screen/SearchScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { position: 'absolute', height: 60, backgroundColor: '#0E1A2E', borderTopWidth: 0},
            tabBarActiveTintColor: '#ffffff',
            }}
        >
            <Tab.Screen name='home' component={HomeScreen}
                options={{
                    tabBarLabel: ({color}) => (
                        <Text style={{color: color, fontSize: 12, marginBottom:8}}>Home</Text>
                    ),
                    tabBarIcon: ({color, size}) => (
                        <Entypo name='home' size={22} color={color} style={{marginTop:8}} />
                    )
                }}
            />
            <Tab.Screen name='tournaments' component={SearchScreen}
                options={{
                    tabBarLabel: ({color}) => (
                        <Text style={{color: color, fontSize: 12, marginBottom:8}}>Search</Text>
                    ),
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="search" size={21} color={color} style={{marginTop:8}} />
                    )
                }}
            />
            <Tab.Screen name='history' component={HistoryScreen}
                options={{
                    tabBarLabel: ({color}) => (
                        <Text style={{color: color, fontSize: 12, marginBottom:8}}>History</Text>
                    ),
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="history" size={21} color={color} style={{marginTop:8}} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}