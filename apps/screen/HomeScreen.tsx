import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/homescreen/Header';
import Slider from '../components/homescreen/body/Slider';
import VerticalImageList from '../components/homescreen/body/Vertical';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View>
                <Slider />
                <VerticalImageList category="Mobile Legends" />
                <VerticalImageList category="Valorant" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E293B', // Set background color
    },
});

export default HomeScreen;
