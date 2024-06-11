import React, { useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Animated, Dimensions, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Header from '../components/homescreen/Header';
import Slider from '../components/homescreen/Slider';
import VerticalImageList from '../components/homescreen/Vertical';

const categories = [
  { key: 'Mobile Legends' },
  { key: 'Valorant' }
];
import NotificationScreen from './NotificationScreen';

const HomeScreen = () => {
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
        {/* <View style={[{ backgroundColor: '#0E1A2E' }, { height: 20 }]} /> */}
        <StatusBar translucent backgroundColor="transparent" />
  
        <Header openSidebar={openSidebar} />
        
        <FlatList
        ListHeaderComponent={<Slider />}
        data={categories}
        renderItem={renderVerticalImageList}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.contentContainer}
      />

        {isSidebarOpen && (
          <>
            <TouchableWithoutFeedback onPress={closeSidebar}>
              <View style={styles.underlay} />
            </TouchableWithoutFeedback>
            <NotificationScreen
              sidebarWidth={sidebarWidth}
              sidebarTranslateX={sidebarTranslateX}
              closeSidebar={closeSidebar}
            />
          </>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E293B',
    },
    underlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 10,
    },
    contentContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
      },
  });
  const renderVerticalImageList = ({ item }) => (
    <VerticalImageList category={item.key} />
  );

export default HomeScreen;
