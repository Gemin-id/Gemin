import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

interface SlideItem {
  id: string; // Add an ID field for Firestore document reference
  imageUri: string;
  title?: string;
  time?: string;
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
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailPage')}>
        <View style={styles.slideContainer}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          {item.title && (
            <Text style={styles.title}>{item.title}</Text>
          )}
          {item.time && (
            <Text style={styles.description}>{item.time}</Text>
          )}
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
    marginTop: 5,
    height: 200,
  },
  font: {
    fontFamily: 'DM Sans Medium', // Use a similar font family
    fontSize: 24, // Larger font size for heading
    color: 'white',
    marginLeft: 20,
    marginBottom: 5,
  },
  slideContainer: {
    marginRight: 4,
    marginLeft: 8,
    alignItems: 'center',
    borderRadius: 20,
    width: 300,
    height: 158,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    borderRadius: 20,
    width: '100%', 
    height: '100%',
  },
  title: {
    position: 'absolute', 
    bottom: 38, 
    left: 16, 
    color: 'white',
    fontSize: 18, // Adjust font size as needed
    fontWeight: 'bold',
  },
  description: {
    position: 'absolute', 
    bottom: 20, 
    left: 16,
    color: 'white',
    fontSize: 14, 
  },
});

export default Slider;