import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SigninScreen: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with username:', username, 'and password:', password);

    }
    return (
    <ScrollView keyboardShouldPersistTaps='never' contentContainerStyle={{flexGrow: 1}}>
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
          <View style ={styles.inputContainer}>
            <Text style={styles.Text}>Name</Text>
            <TextInput
              multiline
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style ={styles.inputContainer}>
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
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => console.log('Forgot Password')}>            
              <Text style={styles.underline}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatingButton}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity style={styles.noAccountButton}>
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
        position: 'relative',
        width: 150,
        height: 98,
        top: 0,
        alignSelf: 'center',
    },
    form: {
      width: '100%',

    },
    title: {
        position: 'relative',
        fontSize:24,
        fontWeight: 'normal',
        fontFamily: 'DM Sans',
        top: 0,
        color: '#ffffff',
        alignSelf: 'center',
        marginBottom: 0,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        top: 30,
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
      position: 'relative',
      shadowColor: "#000",
      marginTop: 50,
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
    alignContent: 'flex-end',
    marginTop: 40,
  },
      noAccountButton: {
        marginTop: 30,
        alignSelf: 'center',
        marginBottom: 30,
      },
      noAccount: {
        color: '#ffffff',
        fontSize: 12,
      },
      inputContainer: {
        marginTop: 20,
      },
     Text: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'DM Sans',
        alignSelf: 'flex-start',
        marginLeft: 0,
        top: 25,
        marginTop: 0,
     }
  });
  export default SigninScreen;