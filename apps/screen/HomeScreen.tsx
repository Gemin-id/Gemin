import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/homescreen/Header'
import Slider from '../components/homescreen/Slider'
import { app } from '../../firebaseConfig'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const HomeScreen = () => {
    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([] as any);

    useEffect(() => {
        getSliders()
    }, [])

    const getSliders = async () => {
    const querySnapshot = await getDocs(collection(db, "Slider"));
    querySnapshot.forEach((doc) => {
        setSliderList((sliderList: any) => [...sliderList, doc.data()]);
    });
    }
    return (
        <View>
            <Header />
            <Slider sliderList={sliderList} />
        </View>
    )
}

export default HomeScreen; 