import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, StackActions } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SigninScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation: any = useNavigation();

    const handleLogin = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            console.log('User signed in!', userCredential.user);

            // Reset the navigation stack and navigate to the Main screen
            navigation.dispatch(
                StackActions.replace('Main')
            );

        } catch (error: any) {
            console.error('Error signing in:', error);
            Alert.alert('Login Error', error.message);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            Alert.alert('Forgot Password', 'Please enter your email to reset your password.');
            return;
        }

        try {
            await auth().sendPasswordResetEmail(email);
            Alert.alert('Password Reset', 'A password reset email has been sent to your email address.');
        } catch (error: any) {
            console.error('Error sending password reset email:', error);
            Alert.alert('Error', error.message);
        }
    };

    return (
        <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={{ flexGrow: 1 }}>
            <KeyboardAwareScrollView
                style={{ backgroundColor: '#0E1A2E' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={true}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>
                        <Image
                            source={require('./../../assets/adaptive-icon.png')}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Sign In</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.Text}>Email</Text>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.Text}>Password</Text>
                            <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
                                <Text style={styles.underline}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.floatingButton} onPress={handleLogin}>
                                <Text style={styles.buttonText}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.noAccountButton} onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.underline}>I don't have an account</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    underline: {
        textDecorationLine: 'underline',
        color: '#ffffff',
        fontSize: 12,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#0E1A2E',
        marginHorizontal: 20,
        marginTop: 50,
    },
    image: {
        width: 150,
        height: 98,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'normal',
        fontFamily: 'DM Sans',
        color: '#ffffff',
        alignSelf: 'center',
        marginBottom: 0,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        alignSelf: 'center',
        fontSize: 16,
        color: '#ffffff',
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
        marginTop: 50,
        shadowColor: '#000',
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
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginTop: 40,
    },
    noAccountButton: {
        marginTop: 30,
        alignSelf: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginTop: 20,
    },
    Text: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'DM Sans',
        alignSelf: 'flex-start',
        marginTop: 25,
    },
});

export default SigninScreen;