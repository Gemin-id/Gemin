import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TournamentInfo from '../screen/TournamentInfo';
import RegistrationScreen from '../screen/RegistrationScreen';

const Stack = createStackNavigator();

export default function RegisterStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TournamentInfo" component={TournamentInfo} />
                <Stack.Screen name="Registration" component={RegistrationScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}