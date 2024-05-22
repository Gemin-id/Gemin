import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/homescreen/Header'
import Slider from '../components/homescreen/body/Slider'
import Horizontal from '../components/homescreen/body/Vertical'

const HomeScreen = () => {
   
    return (
        <View style={styles.container} >
            <Header />
            <Slider />
            <Horizontal/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0E1A2E', // Set background color
      flex: 1, // Allow components to fill available space
    },
  });


export default HomeScreen; 