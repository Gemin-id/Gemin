import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import StatusBox from '../StatusBox';

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
  participants?: number;
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
      navigation.navigate('TournamentInfo', { imageUri: item.imageUri, title: item.title, status: item.status, price: item.price, tourDate: item.tourDate, tourTime: item.tourTime, category: item.category, participants: item.participants });
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.slideContainer}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          <LinearGradient colors={['transparent', '#000000']} style={styles.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
          {item.title && <Text style={styles.title}>{item.title}</Text>}
          {item.time && <Text style={styles.description}>{item.time}</Text>}
          <View style={styles.statusContainer}>
            <StatusBox status={item.status || ''} />
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
    position: 'absolute',
    top: 5,
    left: 16,
    borderRadius: 8,
    overflow: 'hidden',
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
