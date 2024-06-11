import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

interface VerticalItem {
  id: string;
  imageUri: string;
  title: string;
  description?: string;
  battle?: string;
  prizePool?: string;
  status?: string;
  price?: string;
  category?: string;
  tourDate?: string;
  tourTime?: string;
}

const VerticalImageList = ({ category }: { category: string }) => {
  const navigation: any = useNavigation();
  const [tournaments, setTournaments] = useState<VerticalItem[]>([]);

  const getData = async (category: string) => {
    try {
      const tournamentsRef = firestore().collection('tournaments').where('category', '==', category);
      const snapshot = await tournamentsRef.get();
      const fetchedTournaments = snapshot.docs.map((doc) => ({
        id: doc.id,
        imageUri: doc.data().imageUri,
        title: doc.data().title,
        description: doc.data().time,
        battle: doc.data().battle,
        prizePool: doc.data().prizepool,
        status: doc.data().status,
        price: doc.data().price,
        tourDate: doc.data().tourDate,
        tourTime: doc.data().tourTime,
        category: doc.data().category,
      }));
      setTournaments(fetchedTournaments);
    } catch (error) {
      console.error('Error fetching tournaments:', error);
    }
  };

  useEffect(() => {
    getData(category);
  }, [category]);

  const renderItem = ({ item }: { item: VerticalItem }) => {
    const handlePress = () => {
      navigation.navigate('TournamentInfo', {
        imageUri: item.imageUri,
        title: item.title,
        status: item.status,
        price: item.price,
        tourDate: item.tourDate,
        tourTime: item.tourTime,
        category: item.category // Include category here
      });
    };
  
    return (
      <TouchableOpacity onPress={handlePress} style={styles.tournamentContainer}>
        <View>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          <View style={styles.statusContainer}>
            <Text style={styles.statusFont}>{item.status}</Text>
          </View>
          <LinearGradient colors={['transparent', '#1E293B']} style={styles.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
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
  

  const calculateNumColumns = () => {
    // Calculate the number of columns based on the screen width
    const screenWidth = Dimensions.get('window').width;
    const minItemWidth = 150; // Minimum width for each item
    const numColumns = Math.floor(screenWidth / minItemWidth);
    return numColumns > 0 ? numColumns : 1; // Ensure at least 1 column
  };

  const numColumns = calculateNumColumns();

  return (
    <View style={styles.container}>
      <Text style={styles.font}>{category}</Text>
      <FlatList
        data={tournaments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={styles.columnWrapper}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
      />
      <View style={{ height: 0 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
  listContentContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  tournamentContainer: {
    flex: 1,
    margin: 5,
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
