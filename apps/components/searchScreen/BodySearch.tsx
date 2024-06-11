import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
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

export default function BodySearch() {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<VerticalItem[]>([]);
  const [filteredData, setFilteredData] = useState<VerticalItem[]>([]);
  const navigation: any = useNavigation();

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const querySnapshot = await firestore().collection('tournaments').get();

        const tournaments = querySnapshot.docs.map(doc => ({
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

        setData(tournaments);
        setFilteredData(tournaments);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      }
    };

    fetchTournaments();
  }, []);

  useEffect(() => {
    const filtered = data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredData(filtered);
  }, [searchText, data]);

  const renderItem = ({ item }: { item: VerticalItem }) => {
    const handlePress = () => {
      navigation.navigate('TournamentInfo', {
        imageUri: item.imageUri,
        title: item.title,
        status: item.status,
        price: item.price,
        tourDate: item.tourDate,
        tourTime: item.tourTime,
        category: item.category,
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
    const screenWidth = Dimensions.get('window').width;
    const minItemWidth = 150;
    const numColumns = Math.floor(screenWidth / minItemWidth);
    return numColumns > 0 ? numColumns : 1;
  };

  const numColumns = calculateNumColumns();

  return (
    <View style={styles.outerContainer}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Find Tournaments"
          placeholderTextColor="#B0B0B0"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={styles.columnWrapper}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#1E293B',
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#36455D',
    height: 50,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    color: 'white',
    fontSize: 15,
    flex: 1,
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
  listContentContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
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
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
