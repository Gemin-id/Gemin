import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignupScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigation: any = useNavigation();

  const handleSignup = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({ displayName: name });
      
      // Add user data to Firestore
      await firestore().collection('users').doc(userCredential.user.uid).set({
        username,
        name,
        email,
        phone,
      }).then(() => {
        console.log('User added!');
      });

      console.log('User account created & signed in!', userCredential.user);
      // Navigate to Signin screen or another screen after successful signup
      navigation.navigate('Signin');
    } catch (error) {
      console.error('Error creating user:', error);
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
        <View style={{ position: 'relative', marginTop: 10 }}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            color="#ffffff"
            onPress={() => navigation.goBack()}
          />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Username</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Phone</Text>
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry
                value={password}
                enablesReturnKeyAutomatically
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity style={styles.floatingButton} onPress={handleSignup}>
              <Text style={styles.buttonText}>Sign up</Text>
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
    justifyContent: 'center',
    backgroundColor: '#0E1A2E',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'normal',
    fontFamily: 'DM Sans',
    color: '#ffffff',
    alignSelf: 'center',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    marginBottom: 5,
    fontSize: 16,
    color: '#ffffff',
  },
  floatingButton: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4598F7',
    borderRadius: 10,
    shadowColor: '#000',
    marginTop: 30,
    marginBottom: 30,
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
  inputContainer: {
    marginTop: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'DM Sans',
    alignSelf: 'flex-start',
  },
});

export default SignupScreen;