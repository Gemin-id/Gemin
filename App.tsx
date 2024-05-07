import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './apps/navigation/tabNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});