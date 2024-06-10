import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

interface SlideItem {
  id: string;
  imageUri: string;
  title?: string;
  time?: string;
  status?: string;
  price?: string;
  tourDate?: string;
  tourTime?: string;
  category?: string;
}

const Slider: React.FC = () => {
  const navigation: any = useNavigation();
  const [tournaments, setTournaments] = useState<SlideItem[]>([]);

  const getData = async () => {
    try {
      const tournamentsRef = firestore().collection('tournaments').limit(3); // Limit tournaments
      const snapshot = await tournamentsRef.get();
      const fetchedTournaments = snapshot.docs.map((doc) => ({
        id: doc.id,
        imageUri: doc.data().imageUri,
        ...doc.data(),
      }));
      setTournaments(fetchedTournaments);
    } catch (error) {
      console.error('Error fetching tournaments:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }: { item: SlideItem }) => {
    const handlePress = () => {
      navigation.navigate('TournamentInfo', { imageUri: item.imageUri, title: item.title, status: item.status, price: item.price, tourDate: item.tourDate, tourTime: item.tourTime, category: item.category });
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.slideContainer}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          {item.title && <Text style={styles.title}>{item.title}</Text>}
          {item.time && <Text style={styles.description}>{item.time}</Text>}
          <View style={styles.statusContainer}>
            <Text style={styles.statusFont}>{item.status}</Text>
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
        keyExtractor={(item) => item.id}
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    position: 'absolute',
    bottom: 20,
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
});

export default Slider;