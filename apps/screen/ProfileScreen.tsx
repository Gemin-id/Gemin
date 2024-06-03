import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert, PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ProfileScreen: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const navigation: any = useNavigation();

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const userDocRef = firestore().collection('users').doc(user.uid);
      userDocRef.get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            const data = documentSnapshot.data();
            setUserData(data);
            if (data?.profileImage) {
              setImageUri(data.profileImage);
            }
          }
        })
        .catch(error => {
          console.error("Error fetching user data: ", error);
          Alert.alert("Error", "Failed to load user data");
        });
    } else {
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

  const handleImagePicker = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    const result = await launchImageLibrary(options);

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.error) {
      console.log('ImagePicker Error: ', result.error);
    } else if (result.assets && result.assets.length > 0) {
      const source = result.assets[0].uri;
      if (source) {
        setImageUri(source);
        uploadImage(source);
      }
    }
  };

  const uploadImage = async (uri: string) => {
    const user = auth().currentUser;
    if (!user) return;

    setUploading(true);
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const storageRef = storage().ref(`profile_pictures/${user.uid}/${filename}`);
    const task = storageRef.putFile(uri);

    try {
      await task;
      const url = await storageRef.getDownloadURL();
      await firestore().collection('users').doc(user.uid).update({ profileImage: url });
      setUserData({ ...userData, profileImage: url });
      setImageUri(url);
      setUploading(false);
      Alert.alert('Image uploaded successfully!');
    } catch (e) {
      console.error('Error uploading image: ', e);
      Alert.alert('Error uploading image', e.message);
      setUploading(false);
    }
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
          <TouchableOpacity style={styles.profileImage} onPress={handleImagePicker}>
            <Image source={imageUri ? { uri: imageUri } : require('../../assets/profile.png')} style={styles.image} resizeMode="center" />
          </TouchableOpacity>
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
};

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
    overflow: 'hidden',
    marginBottom: 10,
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
