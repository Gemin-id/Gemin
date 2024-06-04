import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons';

const SignupScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@/;
    return re.test(String(email).toLowerCase());
  }
  const validatePhone = (phone: string) => {
    // Phone number must start with 08 and have 8-12 digits
    const re = /^08\d{7,11}/;  // Ensures 08 followed by 7 to 11 digits
    return re.test(phone);
  }

  const validatePassword = (password: string) => {
    // Minimum length of 8 characters
    // One uppercase letter
    // One lowercase letter
    // One number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\W]{8,}$/;
    return re.test(password);
  }

  return (
    <ScrollView keyboardShouldPersistTaps='never' contentContainerStyle={{flexGrow: 1}}>
      <KeyboardAwareScrollView
        style={{ backgroundColor: '#0E1A2E' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        <View style={{ position: 'relative', marginTop: 10 }}>
          <Ionicons name="chevron-back-outline" size={30} color="#ffffff"></Ionicons>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.Text}>Username</Text>
              <TextInput
                multiline
                style={styles.input}
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.Text}>Name</Text>
              <TextInput
                multiline
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.Text}>Email</Text>
              <TextInput
                multiline
                style={styles.input}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (!validateEmail(text)) {
                    console.error('Please enter a valid Gmail address');
                  }
                }}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.Text}>Phone</Text>
              <TextInput
                multiline
                style={styles.input}
                value={phone}
                keyboardType="phone-pad"
                enablesReturnKeyAutomatically
                onChangeText={(text) => {
                  setPhone(text);
                  if (!validatePhone(text)) {
                    console.error('Phone number must be at least 10 characters and start with 08');
                  }
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.Text}>Password</Text>
              <TextInput
                multiline
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry
                value={password}
                enablesReturnKeyAutomatically
                onChangeText={(text) => {
                  setPassword(text);
                  if (!validatePassword(text)) {
                    console.error('Password must be at least 8 characters and include a lowercase letter, uppercase letter, and number');
                  }
                }}
              />
            </View>
            <TouchableOpacity style={styles.floatingButton}>
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
    //   alignItems: 'center',
      backgroundColor: '#0E1A2E',
      marginHorizontal: 20,
    },
    title: {
        position: 'relative',
        fontSize:24,
        fontWeight: 'normal',
        fontFamily: 'DM Sans',
        top: 0,
        color: '#ffffff',
        alignSelf: 'center',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        borderRadius: 0,
        marginBottom: 5,
        top: 0,
        // padding: 10,
        alignSelf: 'center',
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
      position: 'relative',
      shadowColor: "#000",
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
     Text: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'DM Sans',
        alignSelf: 'flex-start',
     }
  });
  export default SignupScreen;