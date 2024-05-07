import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/homescreen/Header'
import Slider from '../components/homescreen/Slider'

const HomeScreen = () => {
   
    return (
        <View>
            <Header />
            <Slider />
        </View>
    )
}

export default HomeScreen; 