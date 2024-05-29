import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

interface ImageItem {
  imageUrl: string;
  title: string;
  description?: string;
}

const imageData: ImageItem[] = [
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?city1',
    title: 'Nature Image',
    description: 'A beautiful scene',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?city2',
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

const VerticalImageList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: ImageItem }) => {
    const handlePress = () => {
      navigation.navigate('TournamentInfo');
    };

    return (
      <TouchableOpacity onPress={handlePress} style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.statusContainer}>
          <Text style={styles.statusFont}>Closed</Text>
        </View>
        <LinearGradient colors={['transparent', '#1E293B']} style={styles.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

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
    marginTop: 10,
    flex: 1,
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
    marginLeft: 5,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  font: {
    fontFamily: 'DM Sans Medium',
    fontSize: 16,
    color: 'white',
    marginLeft: 20,
    marginBottom: 5,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  statusContainer: {
    backgroundColor: 'green',
    position: 'absolute',
    height: 25,
    width: 60,
    padding: 5,
    marginTop: 12,
    left: 9,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusFont: {
    fontSize: 10,
    color: 'white',
    alignItems: 'center',
    fontWeight: 'bold',
  }
});

export default VerticalImageList;
