import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { verticalScale, moderateScale, horizontalScale } from '../../../themes/Metrics';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  openSidebar: () => void;
}

export default function Header({ openSidebar }: HeaderProps) {
  const navigation: any = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('Profile');
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0E1A2E',
    width: '100%',
    height: verticalScale(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
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
});
