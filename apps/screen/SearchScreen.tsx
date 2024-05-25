import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/homescreen/Header';
import BodySearch from '../components/searchScreen/BodySearch';
import VerticalImageList from '../components/homescreen/body/Vertical';

const SearchScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View>
                <BodySearch />
                <VerticalImageList />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E293B', // Set background color
    },
});

export default SearchScreen;
