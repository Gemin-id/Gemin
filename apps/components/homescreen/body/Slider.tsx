import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient'

interface SlideItem {
  id: string; // Add an ID field for Firestore document reference
  imageUri: string;
  title?: string;
  time?: string;
  status?: string;
}

const Slider: React.FC = () => {
  const navigation = useNavigation();
  const [tournaments, setTournaments] = useState<SlideItem[]>([]);

  const getData = async () => {
    try {
      const tournamentsRef = firestore().collection('tournaments');
      const snapshot = await tournamentsRef.get();
      const fetchedTournaments = snapshot.docs.map((doc) => ({
        id: doc.id,
        imageUri: doc.data().imageUri, // Add the imageUri property
        ...doc.data(),
      }));
      setTournaments(fetchedTournaments);
    } catch (error) {
      console.error('Error fetching tournaments:', error);
      // Handle errors appropriately (e.g., display an error message)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item, index }: { item: SlideItem; index: number }) => {
    const handlePress = () => {
      navigation.navigate('TournamentInfo');
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.slideContainer}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          <LinearGradient colors={['transparent', '#000000']} style={styles.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
          {item.title && (
            <Text style={styles.title}>{item.title}</Text>
          )}
          {item.time && (
            <Text style={styles.description}>{item.time}</Text>
          )}
          <View style={styles.statusContainer}>
            <Text style={styles.statusFont}>Ongoing</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.font}>Featured Tournaments</Text>
      <FlatList
        data={tournaments}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 200,
  },
  font: {
    fontFamily: 'DM Sans Medium',
    fontSize: 16, 
    color: 'white',
    marginLeft: 20,
    marginBottom: 5,
  },
  slideContainer: {
    marginTop: 5,
    marginRight: 4,
    marginLeft: 5,
    alignItems: 'center',
    borderRadius: 20,
    width: 300,
    height: 158,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
  },
  image: {
    borderRadius: 20,
    width: '100%', 
    height: '100%',
  },
  title: {
    position: 'absolute', 
    bottom: 30, 
    left: 16, 
    color: 'white',
    fontSize: 16, 
    fontWeight: 'bold',
  },
  description: {
    position: 'absolute', 
    bottom: 10, 
    left: 16,
    color: 'white',
    fontSize: 12, 
  },
  statusContainer: {
    backgroundColor: 'green', 
    position: 'absolute',
    height: 25,
    width: 60,
    padding: 5,
    marginTop: 15,
    left: 16, 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusFont: {
    fontSize: 10,
    color: 'white',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
});

export default Slider;
