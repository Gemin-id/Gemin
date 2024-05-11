import { Platform, StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { verticalScale, horizontalScale, moderateScale } from '../../../themes/Metrics';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gemin</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0E1A2E',
        width: '100%',
        height: verticalScale(90),
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        color: 'white',
    },
});
