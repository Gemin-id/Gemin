import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './apps/navigation/tabNavigation';
import TournamentInfo from './apps/screen/TournamentInfo';
import Header from './apps/components/homescreen/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer> */}
      <Header />
      <TournamentInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});