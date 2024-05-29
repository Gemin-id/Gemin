import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './apps/components/homescreen/Header';
import HomeStack from './apps/navigation/homeStack';

export default function App() {
  return (
    // <NavigationContainer>
      <View style={styles.container}>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <HomeStack />
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
