import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';

const imageUrls = [
  'https://source.unsplash.com/random/200x200?nature',
  'https://source.unsplash.com/random/200x200?city',
  'https://source.unsplash.com/random/200x200?animal',

  // Add more image URLs as needed (12 for 2 columns x 6 rows)
];

const NUM_COLUMNS = 2; // Number of columns

const renderItem = ({ item, index }: { item: string; index: number }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );
};

const HorizontalImageList = () => {
  return (
    <FlatList
      data={imageUrls}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()} // Use index for key extraction
      numColumns={NUM_COLUMNS}
      columnWrapperStyle={styles.columnWrapper}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }} // Add padding for better scrolling experience
    />
  );
};


const styles = StyleSheet.create({
  imageContainer: {
    width: Dimensions.get('window').width / NUM_COLUMNS - 10, // Calculate image width based on columns
    height: 200,
    margin: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  columnWrapper: {
    flex: 1, // Wrap columns evenly
    justifyContent: 'space-between', // Distribute items vertically
  },
});

export default HorizontalImageList;
