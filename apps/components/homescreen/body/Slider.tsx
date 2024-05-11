import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface SlideItem {
  title: string;
  imageUri: string;
}

const Slider: React.FC = () => {
  const data: SlideItem[] = [
    { title: 'Image 1', imageUri: 'https://example.com/image1.jpg' },
    { title: 'Image 2', imageUri: 'https://example.com/image2.jpg' },
    { title: 'Image 3', imageUri: 'https://example.com/image3.jpg' },
    // Add more images as needed
  ];

  const renderItem = ({ item, index }: { item: SlideItem; index: number }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.imageUri }} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.font}>Featured Tournaments</Text>
      <Carousel
        layout="default"
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={300}
        inactiveSlideOpacity={0.7}
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
    fontFamily: 'DM Sans Medium',
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
    },  
  slide: {
    width: 300,
    height: 158,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    marginTop: 10,
    width: '100%',
    height: '80%',
    borderRadius: 10,
  },
});

export default Slider;
