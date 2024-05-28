import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, View, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Header from './apps/components/homescreen/Header';
import NotificationScreen from './apps/screen/NotificationScreen';



export default function App() {
  const sidebarWidth = useRef(new Animated.Value(0)).current;
  const sidebarTranslateX = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    Animated.parallel([
      Animated.timing(sidebarWidth, {
        toValue: Dimensions.get('window').width * 0.75,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(sidebarTranslateX, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    Animated.parallel([
      Animated.timing(sidebarWidth, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(sidebarTranslateX, {
        toValue: Dimensions.get('window').width,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={[{backgroundColor: '#0E1A2E'}, {height : 20}]} />
      <StatusBar translucent backgroundColor="transparent" />
  
      <TouchableWithoutFeedback onPress={closeSidebar}>
        <View style={styles.underlay} />
      </TouchableWithoutFeedback>
  
      <Header onNotificationPress={openSidebar} />
  
      {isSidebarOpen && (
        <TouchableWithoutFeedback onPress={closeSidebar}>
          <View style={styles.underlay} />
        </TouchableWithoutFeedback>
      )}

      {isSidebarOpen && (
        <NotificationScreen 
          sidebarWidth={sidebarWidth}
          sidebarTranslateX={sidebarTranslateX}
          closeSidebar={closeSidebar}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#1E293B',
  },
  underlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
