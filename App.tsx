import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './apps/navigation/tabNavigation';
import Header from './apps/components/homescreen/Header';
import BracketScreen from './apps/screen/BracketScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <Header />
      <BracketScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
  },
});