import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import HomeStack from './apps/navigation/homeStack';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={[{ backgroundColor: '#0E1A2E' }, { height: 20 }]} />
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <HomeStack />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
  },
});
