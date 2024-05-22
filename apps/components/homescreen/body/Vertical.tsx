import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, ScrollView } from 'react-native';

interface ImageItem {
  imageUrl: string;
  title: string;
  description?: string; 
}

const imageData: ImageItem[] = [
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?nature',
    title: 'Nature Image',
    description: 'A beautiful scene',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?city',
    title: 'City Life',
    description: 'The vibrant energy ',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?animal',
    title: 'Animal',
    description: 'A majestic creature in its habitat',
  },
  // Add more image data objects with titles and descriptions
];

const NUM_COLUMNS = 2; // Number of columns

const renderItem = ({ item, index }: { item: ImageItem; index: number }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      {item.description && ( // Render description only if it exists
        <Text style={styles.description}>{item.description}</Text>
      )}
    </View>
  );
};

const VerticalImageList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Mobile Legends</Text>
      <FlatList
        data={imageData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Use index for key extraction
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={styles.columnWrapper}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }} // Add padding for all sides
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'blue',
    flex: 1,
  },
  imageContainer: {
    width: Dimensions.get('window').width / NUM_COLUMNS - 20, // Adjust width for 10px margin on each side
    height: 200,
    margin: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    position: 'absolute',
    bottom: 5,
    left: 10,
    color: 'white',
    fontSize: 14,
  },
  columnWrapper: {
    flex: 1, 
    justifyContent: 'space-between', 
  },
  font: {
    fontFamily: 'DM Sans Medium',
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
  }
});

export default VerticalImageList;
