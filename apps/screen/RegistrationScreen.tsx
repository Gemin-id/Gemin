import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const screenWidth = Dimensions.get('window').width;

export default function RegistrationScreen() {
    const [teamName, setTeamName] = useState('');
    const [teamMembers, setTeamMembers] = useState(['', '', '', '', '']);
    
    const handleMemberChange = (text: string, index: number) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index] = text;
        setTeamMembers(updatedMembers);
    };

    const navigation: any = useNavigation();
    const route: any = useRoute();
    const { imageUri, title, tourDate, tourTime, price } = route.params;

    const handleRegistration = async () => {
        const user = auth().currentUser;
        if (!user) {
            Alert.alert('Anda Belum Mendaftarkan Akun');
            return;
        }
    
        if (!teamName || teamMembers.some(member => member === '')) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
    
        try {
            // Generate a unique document ID using the title and current timestamp
            const documentId = `${title}-${new Date().getTime()}`;
    
            await firestore().collection('participants').doc(documentId).set({
                teamName,
                teamMembers,
                title,
                tourDate,
                tourTime,
                userId: user.uid,
                status: 'belum bayar', // Tambahkan status 'belum bayar'
            });
    
            navigation.navigate('Payment', { teamName, teamMembers, title, tourDate, tourTime, price });
        } catch (error) {
            console.error("Error adding document: ", error);
            Alert.alert('Error', 'Failed to register');
        }
    };    

    return (
        <ScrollView keyboardShouldPersistTaps='never' contentContainerStyle={{flexGrow: 1}}>
            <KeyboardAwareScrollView style={{ backgroundColor: '#0E1A2E' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.outerContainer}
            scrollEnabled={true}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View>
                <View style={styles.imageContainer}>
                    <Image source={{uri: imageUri}} style={styles.image} />
                    <LinearGradient colors={['transparent', '#1E293B']} style={styles.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
                </View>
                <View style={{height: 8}} />
                <View style={styles.innerContainer}>
                    <View style={styles.tournamentHeading}>
                        <View>
                            <Text style={styles.title}>{title}</Text>
                            <View style={styles.timeContainer}>
                                <AntDesign name="calendar" size={17} color="#ffffff" />
                                <Text style={[styles.time, {marginLeft: 3, marginRight: 8}]}>{tourDate}</Text>
                                <Ionicons name="time" size={17} color="#ffffff" />
                                <Text style={[styles.time, {marginLeft: 2}]}>{tourTime}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Team Name</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Team name"
                            placeholderTextColor="#A5A9B1"
                            value={teamName}
                            onChangeText={setTeamName}
                        />
                        <View style={{height: 10}} />
                        <Text style={styles.inputLabel}>Member Name</Text>
                        {teamMembers.map((member, index) => (
                            <View key={index} style={styles.inputRow}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Entypo name="dot-single" size={24} color="#ffffff" />
                                    <TextInput
                                        style={[styles.textInput, { flex: 1 }]}
                                        placeholder={`Enter Member ${index + 1} name`}
                                        placeholderTextColor="#A5A9B1"
                                        value={member}
                                        onChangeText={text => handleMemberChange(text, index)}
                                    />
                                </View>
                            </View>
                        ))}
                    </View>
                    
                </View>
            <View>
            <TouchableOpacity 
                style={styles.floatingButton}
                onPress={handleRegistration}
            >
                <Text style={styles.buttonText}>Register Now!</Text>
                <Text style={[styles.buttonText, {color: '#EADE75', fontSize: 20}]}>Rp{price.toLocaleString()}</Text>
            </TouchableOpacity>
            </View>
            </View> 
            </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#1E293B',
    },
    imageContainer: {
        width: screenWidth,
        height: 220,
        overflow: 'hidden',
    },
    image: {
        width: screenWidth,
        height: 220,
        position: 'absolute',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '50%',
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        paddingBottom: 90, // Padding to accommodate the floating button
    },
    statusBox: {
        backgroundColor: '#8859C5',
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 5,
        alignSelf: 'flex-start',
    },
    status: {
        fontSize: 12,
        color: '#ffffff',
    },
    tournamentHeading:{
        marginBottom: 10,
    },
    title:{
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    timeContainer:{
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    time:{
        fontSize: 13,
        color: '#ffffff',
    },
    participantContainer:{
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 'auto',
    },
    inputContainer: {
        marginTop: 10,
    },
    inputLabel: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 5,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#A5A9B1',
        color: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10,
        fontSize: 14,
        width: '100%',
    },
    inputRow: {
        // marginBottom: 10,
    },
    floatingButton: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#4598F7',
        borderRadius: 10,
        position: 'absolute',
        bottom: 20, 
        shadowColor: "#000",
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
});