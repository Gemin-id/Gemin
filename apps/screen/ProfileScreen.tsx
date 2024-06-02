import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const navigation: any = useNavigation();

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const userDocRef = firestore().collection('users').doc(user.uid);
      userDocRef.get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setUserData(documentSnapshot.data());
          }
        })
        .catch(error => {
          console.error("Error fetching user data: ", error);
          Alert.alert("Error", "Failed to load user data");
        });
    } else {
      // Navigate to Signin screen if user is not authenticated
      navigation.navigate('Signin');
    }
  }, []);

  const handleLogout = () => {
    auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Signin' }],
        });
      })
      .catch(error => {
        console.error("Error signing out: ", error);
        Alert.alert("Error", "Failed to log out");
      });
  };

  const handleBackToMain = () => {
    navigation.navigate('Main');
  };

  if (!userData) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: 'center' }}>
          <View style={styles.profileImage}>
            <Image source={require('../../assets/profile.png')} style={styles.image} resizeMode="center" />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.text, { fontSize: 20, marginTop: -40 }]}>{userData.username}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.middleSectionTextContainer}>
            <View style={styles.middleSectionText}>
              <Text style={styles.toptext}>Name</Text>
              <Text style={styles.bottomtext}>{userData.name}</Text>
            </View>
          </View>
          <View style={styles.middleSectionTextContainer}>
            <View style={styles.middleSectionText}>
              <Text style={styles.toptext}>Phone Number</Text>
              <Text style={styles.bottomtext}>{userData.phone}</Text>
            </View>
          </View>
          <View style={styles.middleSectionTextContainer}>
            <View style={styles.middleSectionText}>
              <Text style={styles.toptext}>Email</Text>
              <Text style={styles.bottomtext}>{userData.email}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleLogout}>
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
    fontFamily: 'DM Sans',
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
});

export default ProfileScreen;