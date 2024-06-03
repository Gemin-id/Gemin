import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaymentScreen = () => {
    const navigation : any = useNavigation();
    const route = useRoute();
    const { teamName, teamMembers, title, tourDate, tourTime, price } : any = route.params;

    // Generate unique code
    const generateUniqueCode = () => {
        return Math.floor(Math.random() * 501); // generates a number between 0 and 500
    };

    const [uniqueCode, setUniqueCode] = useState(generateUniqueCode());

    const schedule = [
        { Detail: 'Registration Fee', count: 5, cost: price },
        { Detail: 'Application Fee', count: 5, cost: 0 },
        { Detail: 'Unique Code*', count: 1, cost: uniqueCode },
    ];

    const totalCost = schedule.reduce((total, item) => total + item.cost  , 0);

    return (
        <ScrollView keyboardShouldPersistTaps='never' contentContainerStyle={{flexGrow: 1}}>
            <KeyboardAwareScrollView style={{ backgroundColor: '#1E293B' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={true}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <SafeAreaView style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ alignSelf: 'center' }}>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.title}>{title}</Text>
                                <View style={styles.boxtext}>
                                    <View style={styles.boxitem}>
                                        <AntDesign name="calendar" size={17} color="#ffffff" />
                                        <Text style={styles.toptext}>   </Text>
                                        <Text style={styles.toptext}>{tourDate}</Text>
                                    </View>
                                </View>
                                <View style={styles.boxtext}>
                                    <View style={styles.boxitem}>
                                        <Ionicons name="time" size={17} color="#ffffff" />
                                        <Text style={styles.toptext}>   </Text>
                                        <Text style={styles.toptext}>{tourTime}</Text>
                                    </View>
                                </View>
                                <View style={styles.boxtext}>
                                    <View style={styles.boxitem}>
                                        <FontAwesome name="group" size={20} color="#ffffff" marginBottom={10} />
                                        <Text style={styles.toptext}>  </Text>
                                        <Text style={styles.toptext}>{teamName}</Text>
                                    </View>
                                </View>
                                <Text style={[styles.boxtext, { color: '#ffffff', fontSize: 11, marginTop: -5 }]}>
                                    {teamMembers.join(', ')}
                                </Text>
                            </View>
                            <Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 20 }}>Payment Details</Text>
                            <View style={[styles.tabOverview, { paddingTop: 10 }]}>
                                <View style={{ marginRight: 100 }}>
                                    {schedule.map((item, index) => (
                                        <Text key={index} style={styles.tabContentDesc}>{item.Detail}</Text>
                                    ))}
                                </View>
                                <View>
                                    {schedule.map((item, index) => (
                                        <Text key={index} style={styles.tabContentDesc}>{item.count > 1 ? `x${item.count}` : ''}</Text>
                                    ))}
                                </View>
                                <View style={{ marginLeft: 25, alignItems: 'flex-end' }}>
                                    {schedule.map((item, index) => (
                                        <Text key={index} style={styles.tabContentDesc}>Rp{item.cost.toLocaleString()}</Text>
                                    ))}
                                </View>
                            </View>
                            <Text style={{ alignSelf: 'flex-start', color: '#ffffff', fontFamily: 'DM Sans', fontSize: 9 }}>
                                *Unique code is required to verify your payment
                            </Text>
                            <View style={{ justifyContent: 'flex-start' }}>
                                <View style={styles.middleSectionTextContainer}>
                                    <View style={styles.middleSectionText}>
                                        <Text style={styles.total}>Total</Text>
                                        <Text style={styles.total}>Rp{totalCost.toLocaleString()}</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Confirm', { totalCost })}>
                                <Text style={styles.buttonText}>Pay Now!</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E293B',
        justifyContent: 'flex-start',
        marginHorizontal: 15,
    },
    text: {
        fontFamily: 'DN Sans',
        fontWeight: '700',
        color: '#FFFFFF',
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
        marginTop: 0,
    },
    toptext: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'normal',
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
        marginTop: 100,
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
    downtext: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    middletext: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'normal',
    },
    box: {
        width: "100%",
        height: 225,
        backgroundColor: '#36455D',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 35,
        paddingRight: 10
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: -10,
        fontFamily: 'DN Sans',
        marginBottom: 10,
    },
    boxtext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginTop: 10,
        paddingTop: 5,
    },
    boxitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    total: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: -10,
    },
    tabOverview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        color: '#FFFFFF',
        alignSelf: 'flex-start',
    },
    tabContentDesc: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'normal',
        margin: 5,
    },
});

export default PaymentScreen;