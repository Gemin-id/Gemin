import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/homescreen/Header';
import BodySearch from '../components/searchScreen/BodySearch';
import VerticalImageList from '../components/homescreen/body/Vertical';

//bisa pakai algoria, typesense

const SearchScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View>
                <BodySearch />
                <VerticalImageList category="Mobile Legends"  />
                <VerticalImageList category="Valorant"  />
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
