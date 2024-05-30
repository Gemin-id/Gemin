import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

interface ImageItem {
  imageUrl: string;
  title: string;
  description?: string;
  battle?: string;
  prizePool?: string;
}

const imageData: ImageItem[] = [
  {
    imageUrl: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/10/B1000695-Cover-daftar-tournament-e-sport-indonesia.jpg',
    title: 'All Star Event',
    description: '02/29/2024  -  13:00',
    battle: '5v5',
    prizePool: 'Rp 500.000',
  },
  {
    imageUrl: 'https://media.licdn.com/dms/image/C4E12AQG2fk46LjYHHQ/article-cover_image-shrink_720_1280/0/1563894791754?e=2147483647&v=beta&t=GvhZh0uvobpTzM4wY30cr6dKKHK7GkdBSyw3jf_oAd8',
    title: 'Big Versus',
    description: '03/03/2024  -  15:00',
    battle: '5v5',
    prizePool: 'Rp 500.000',
  },
  {
    imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/09A3/production/_85976420_fwvspng.jpg',
    title: 'Porak Online',
    description: '04/14/2024  -  10:00',
    battle: '5v5',
    prizePool: 'Rp 500.000',
  },
  {
    imageUrl: 'https://www.androidauthority.com/wp-content/uploads/2019/03/esports-tournaments-leagues-featured.jpg',
    title: 'FF Cikeruh',
    description: '12/02/2023  -  09:00',
    battle: '5v5',
    prizePool: 'Rp 500.000',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/200x200?water',
    title: 'Ocean',
    description: 'A calm ocean',
    battle: '5v5',
    prizePool: 'Rp 500.000',
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
      <TouchableOpacity onPress={handlePress} style={styles.tournamentContainer}>
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.statusContainer}>
            <Text style={styles.statusFont}>Closed</Text>
          </View>
          <LinearGradient colors={['transparent', '#1E293B']} style={styles.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
          <View style={{flexDirection: 'row', marginLeft: 5}}>
          <View style={styles.battleBox}>
            <Text style={styles.battle}>{item.battle}</Text>
          </View>
          <View style={styles.prizePoolBox}>
            <Text style={styles.prizePool}>{item.prizePool}</Text>
          </View>
        </View>
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
      <View style={{height: 50}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  tournamentContainer: {
    width: Dimensions.get('window').width / NUM_COLUMNS - 20, // Adjust width for 10px margin on each side
    height: '100%',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 152,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 3,
  },
  description: {
    color: 'white',
    fontSize: 11,
    marginLeft: 5,
    marginBottom: 5,
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
    marginBottom: 12,
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
  },
  battle: {
    color: 'white',
    fontSize: 10,
  },
  battleBox: {
    backgroundColor: '#313B4B',
    height: 20,
    width: 'auto',
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  prizePool: {
    color: 'white',
    fontSize: 10,
  },
  prizePoolBox: {
    backgroundColor: '#313B4B',
    height: 20,
    width: 'auto',
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VerticalImageList;
