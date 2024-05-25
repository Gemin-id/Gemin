import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

interface ImageItem {
  imageUrl: string;
  title: string;
  description?: string;
}

const imageData: ImageItem[] = [
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?city',
    title: 'Nature Image',
    description: 'A beautiful scene',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?city',
    title: 'City Life',
    description: 'The vibrant energy',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?animal',
    title: 'Animal',
    description: 'A majestic creature in its habitat',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?nature',
    title: 'Mountain',
    description: 'A stunning mountain view',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?water',
    title: 'Ocean',
    description: 'A calm ocean',
  },
  // Add more image data objects with titles and descriptions
];

const NUM_COLUMNS = 2; // Number of columns

const renderItem = ({ item }: { item: ImageItem }) => {
  const handlePress = () => {
    Alert.alert('Image Pressed', `You pressed the image titled "${item.title}"`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.imageContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <LinearGradient colors={['transparent', '#1E293B']} style={styles.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
      <View style={styles.blurContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {item.description && (
          <Text style={styles.description}>{item.description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const VerticalImageList = () => {
  // Slice the imageData array to get the first 4 items
  const limitedImageData = imageData.slice(0, 8);

  return (
    <View style={styles.container}>
      <Text style={styles.font}>Mobile Legends</Text>
      <FlatList
        data={limitedImageData}
        renderItem={renderItem} // Use the renderItem function directly
        keyExtractor={(item, index) => index.toString()} // Use index for key extraction
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={styles.columnWrapper}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }} // Add padding for all sides
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  blurContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for blur effect
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width / NUM_COLUMNS - 20, // Adjust width for 10px margin on each side
    height: 225,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  font: {
    fontFamily: 'DM Sans Medium',
    fontSize: 24,
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
  },
  gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '50%',
  }
});

export default VerticalImageList;
