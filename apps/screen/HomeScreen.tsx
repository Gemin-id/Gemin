import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/homescreen/Header';
import Slider from '../components/homescreen/Slider';
import VerticalImageList from '../components/homescreen/Vertical';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <Slider />
                <VerticalImageList category="Mobile Legends" />
                <VerticalImageList category="Valorant" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E293B', // Set background color
    },
});

export default HomeScreen;