import React, { useEffect, useState } from 'react'
import Header from '../components/homescreen/Header'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const ConfirmScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView style={{ backgroundColor: '#1E293B' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: 'center', marginTop: 25}}>
                    <View style={styles.middleSectionTextContainer}>
                        <View style={styles.middleSectionText}>
                            <Text style={styles.toptext}>Bank Name</Text>
                            <Text style={styles.bottomtext}>Bank Central Asia (BCA)</Text>
                        </View>
                    </View>
                    <View style={styles.middleSectionTextContainer}>
                        <View style={styles.middleSectionText}>
                            <Text style={styles.toptext}>Account Holder’s Name</Text>
                            <Text style={styles.bottomtext}>Gemin</Text>
                        </View>
                    </View>
                    <View style={styles.middleSectionTextContainer}>
                        <View style={styles.middleSectionText}>
                            <Text style={styles.toptext}>Account Number</Text>
                            <Text style={styles.bottomtext}>001122334455</Text>
                        </View>
                    </View>
                    <View style={styles.middleSectionTextContainer}>
                        <View style={styles.middleSectionText}>
                            <Text style={styles.toptext}>Transfer Amount</Text>
                            <Text style={styles.bottomtext}>Rp15.011</Text>
                        </View>
                    </View>
                    <View style={styles.sectionContainer}>
                        <View style={styles.warningText}>
                            <AntDesign name="warning" size={24} color="#ffffff"/>
                            <Text style={styles.toptext}>   </Text>
                            <Text style={{fontSize: 12, color: '#ffffff', }}>Transfer before February 27, 2024 13.00 or your transaction will automatically be canceled by our system.</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('SuccesPay') }>
                        <Text style={styles.buttonText}>Confirm Payment</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </KeyboardAwareScrollView>
        </SafeAreaView>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E293B',
        justifyContent: 'flex-start',
        padding: 25,
    },
    middleSectionTextContainer: {
        height: 50,
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    middleSectionText: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        
    },
    toptext: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'normal',
        marginBottom: 5,
    },
    bottomtext: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    floatingButton: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4598F7',
        borderRadius: 10,
        position: 'relative',
        shadowColor: "#000",
        marginTop: 240,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2.5,
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    texts: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold'
    },
    sectionContainer: {
        height: 75,
        width: '100%',
        backgroundColor: '#36455D',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        paddingRight: 10,
    },
    warningText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginTop: 10,
        paddingTop: 5,
        marginRight: 10,
    },
})

export default ConfirmScreen