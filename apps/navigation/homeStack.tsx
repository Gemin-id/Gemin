import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './tabNavigation';
import TournamentInfo from '../screen/TournamentInfo';
import ProfileScreen from '../screen/ProfileScreen';
import RegistrationScreen from '../screen/RegistrationScreen';
import BracketScreen from '../screen/BracketScreen';
import PaymentScreen from '../screen/PaymentScreen';
import ConfirmScreen from '../screen/ConfirmScreen';
import SigninScreen from '../screen/SigninScreen';
import SignupScreen from '../screen/SignupScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigation} />
      <Stack.Screen name="TournamentInfo" component={TournamentInfo} />
      <Stack.Screen name="Profile" component={ProfileScreen} /> 
      <Stack.Screen name="Registration" component={RegistrationScreen} /> 
      <Stack.Screen name="Bracket" component={BracketScreen} /> 
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Confirm" component={ConfirmScreen} />
      <Stack.Screen name="SuccesPay" component={TabNavigation} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
