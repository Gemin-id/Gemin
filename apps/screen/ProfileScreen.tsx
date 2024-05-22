import React, { useEffect, useState } from 'react'
import Header from '../components/homescreen/Header'
import { app } from '../../firebaseConfig'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';


const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignSelf: 'center'}}>
                    <View style={styles.profileImage}>
                    <Image source={require('../../assets/profile.png')} style={styles.image} resizeMode="center" /></View>
                </View>
                <View style= {{alignItems: 'center'}}>
                    <Text style={[styles.text, {fontSize: 20, marginTop:-40}]}>username</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.middleSectionTextContainer}>
                        <View style={styles.middleSectionText}>
                            <Text style={styles.toptext}>Name</Text>
                            <Text style={styles.bottomtext}>User Name</Text>
                        </View>
                    </View>
                    <View style={styles.middleSectionTextContainer}>
                        <View style={styles.middleSectionText}>
                            <Text style={styles.toptext}>Phone Number</Text>
                            <Text style={styles.bottomtext}>+62818181818</Text>
                        </View>
                    </View>
                    <View style={styles.middleSectionTextContainer}>
                        <View style={styles.middleSectionText}>
                            <Text style={styles.toptext}>Email</Text>
                            <Text style={styles.bottomtext}>user@name.com</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Text style={styles.texts}>Log Out</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E293B'
    },
    text: {
        fontFamily: 'DN Sans',
        fontWeight: '700',
        color: '#FFFFFF',
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden'
    },
    middleSectionTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    middleSectionText: {
        height: 20,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    toptext: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold'
    },
    bottomtext: {
        color: '#FFFFFF',
        fontSize: 13,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        
    },
    button: {
        width: 190,
        height: 40,
        backgroundColor: '#C54545',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texts: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold'
    }
})

export default ProfileScreen;