import { Platform, StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { verticalScale, moderateScale, horizontalScale } from '../../../themes/Metrics';
import { Ionicons } from '@expo/vector-icons'; // or any other icon library you prefer

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="person" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Gemin</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="notifications" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0E1A2E',
    width: '100%',
    height: verticalScale(90),
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute items evenly along the main axis
    paddingHorizontal: horizontalScale(10), // Add horizontal padding
    borderRadius: 20,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
