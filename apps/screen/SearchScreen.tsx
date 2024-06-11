import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/homescreen/Header';
import BodySearch from '../components/searchScreen/BodySearch';
import VerticalImageList from '../components/homescreen/Vertical';

//bisa pakai algoria, typesense

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <BodySearch />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E293B', // Set background color
    },
});

export default SearchScreen;
