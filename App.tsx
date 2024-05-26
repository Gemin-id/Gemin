import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './apps/navigation/AppNavigator';
import HistoryScreen from './apps/screen/HistoryScreen';
import Header from './apps/components/homescreen/Header';

export default function App() {
  return (
    // <NavigationContainer>
      <View style={styles.container}>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        {/* <AppNavigator /> */}
        <Header />
        <HistoryScreen />
      </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
  },
});
