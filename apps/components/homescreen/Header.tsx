import { Platform, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { verticalScale, horizontalScale, moderateScale } from '../../../themes/Metrics';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        height: verticalScale(120),
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        
    },
});
