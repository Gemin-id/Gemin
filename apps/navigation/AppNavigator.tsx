import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './tabNavigation';
import TournamentInfo from '../screen/TournamentInfo';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigation} />
      <Stack.Screen name="TournamentInfo" component={TournamentInfo} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
