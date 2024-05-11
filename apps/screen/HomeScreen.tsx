import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/homescreen/Header'
import Slider from '../components/homescreen/body/Slider'
import Horizontal from '../components/homescreen/body/Horizontal'

const HomeScreen = () => {
   
    return (
        <View>
            <Header />
            <Slider />
            <Horizontal/>
        </View>
    )
}

export default HomeScreen; 