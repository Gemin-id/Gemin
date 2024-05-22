import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

interface SlideItem {
  imageUri: string;
  title?: string; 
  time?: string; 
}


const Slider: React.FC = () => {
  const navigation = useNavigation();
  
  const data: SlideItem[] = [
    {
      imageUri: 'https://us.v-cdn.net/6036147/uploads/GOQOTHGYG807/l-18-1-1200x675.jpg',
      title: 'Tournament 1',
      time: '01/25/2024 - 13.00',
    },
    {
      imageUri: 'https://www.tcenergy.com/siteassets/about/innovation-social-1200x675.jpg',
      title: 'Tournament 2',
      time: '01/25/2024 - 13.00'
    },
    {
      imageUri: 'https://www.thespruce.com/thmb/9QxJZKXZrJ2Q5n6J7f9Jz7wV9L0=/1200x675/smart/filters:no_upscale()/GettyImages-1139207938-5c4b4c4b46e0fb0001d9b1f4.jpg',
      title: 'Tournament 3',
      time: '01/25/2024 - 13.00'
    },

  ];

  const renderItem = ({ item, index }: { item: SlideItem; index: number }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailPage')}>
        <View style={styles.slideContainer}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          {item.title && ( // Render title only if it exists
            <Text style={styles.title}>{item.title}</Text>
          )}
          {item.time && ( // Render description only if it exists
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
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#0E1A2E', 
    height: 200,
  },
  font: {
    fontFamily: 'DM Sans Medium', // Use a similar font family
    fontSize: 24, // Larger font size for heading
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
  },
  slideContainer: {
    marginRight: 4,
    marginLeft: 8,
    alignItems: 'center',
    borderRadius: 10,
    width: 300,
    height: 158,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    borderRadius: 10,
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
