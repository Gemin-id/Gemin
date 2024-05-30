import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './tabNavigation';
import TournamentInfo from '../screen/TournamentInfo';
import ProfileScreen from '../screen/ProfileScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigation} />
      <Stack.Screen name="TournamentInfo" component={TournamentInfo} />
      <Stack.Screen name="Profile" component={ProfileScreen} /> 

    </Stack.Navigator>
  );
};

export default HomeStack;
