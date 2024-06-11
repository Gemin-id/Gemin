import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import React, { useRef, useState } from 'react';
import { verticalScale, moderateScale, horizontalScale } from '../../../themes/Metrics';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import NotificationScreen from '../../screen/NotificationScreen';

export default function Header() {
  const navigation: any = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

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
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleProfilePress}>
        <Ionicons name="person" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Gemin</Text>
      <TouchableOpacity style={styles.iconContainer} onPress={openSidebar}>
        <Ionicons name="notifications" size={24} color="white" />
      </TouchableOpacity>

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0E1A2E',
    width: '100%',
    height: verticalScale(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute items evenly along the main axis
    paddingHorizontal: horizontalScale(10), // Add horizontal padding
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  underlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9,
  },
});
