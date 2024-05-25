import { View, Text, Image, Dimensions, useWindowDimensions, StyleSheet, ScrollView, FlatList } from 'react-native'
// import React from 'react'
import * as React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { FontAwesome } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const participants = [
    { id: '1', name: 'Team A'},
    { id: '2', name: 'Team B'},
    { id: '3', name: 'Team C'},
    { id: '4', name: 'Team D'},
    { id: '5', name: 'Team E'},
    { id: '6', name: 'Team F'},
    { id: '7', name: 'Team G'},
    { id: '8', name: 'Team H'}
];

const ParticipantCard = ({ name }: { name: string }) => (
    <View style={styles.card}>
        <FontAwesome name="group" size={24} color="#ffffff" marginTop={5} marginBottom={10} />
        <Text style={styles.cardTitle}>{name}</Text>
    </View>
);

const FirstRoute = () => (
    <ScrollView style={styles.scene}>
        <View style={styles.tabOverview}>
            <View style={{marginRight: 45}}>
                <Text style={styles.tabOverviewTitle}>Game</Text>
                <Text style={styles.tabOverviewTitle}>Organizer</Text>
                <Text style={styles.tabOverviewTitle}>Tournament Format</Text>
            </View>
            <View>
                <Text style={styles.tabContentDesc}>Mobile Legends</Text>
                <Text style={styles.tabContentDesc}>Pixel Tournaments</Text>
                <Text style={styles.tabContentDesc}>Single Elimination</Text>
            </View>
        </View>
        <Text style={[styles.tabTitle, {marginTop: 10}]}>Schedule</Text>
        <View style={[styles.tabOverview, {paddingTop: 10}]}>
            <View style={{marginRight: 45}}>
                <Text style={styles.tabOverviewTitle}>Bracket 1</Text>
                <Text style={styles.tabOverviewTitle}>Bracket 2</Text>
                <Text style={styles.tabOverviewTitle}>Bracket 3</Text>
            </View>
            <View>
                <Text style={styles.tabContentDesc}>February 29th, 2024</Text>
                <Text style={styles.tabContentDesc}>February 29th, 2024</Text>
                <Text style={styles.tabContentDesc}>March 1st, 2024</Text>
            </View>
            <View style={{marginLeft: 30}}>
                <Text style={styles.tabContentDesc}>13.00</Text>
                <Text style={styles.tabContentDesc}>19.00</Text>
                <Text style={styles.tabContentDesc}>13.00</Text>
            </View>
        </View>
    </ScrollView>
);  
const SecondRoute = () => (
    <ScrollView style={styles.scene}>
        <Text style={styles.tabContentDesc}>1. Setiap anggota harus memiliki akun Gemin</Text>
        <Text style={styles.tabContentDesc}>2. Pendaftaran dilakukan oleh ketua tim</Text>
        <Text style={styles.tabContentDesc}>3. Dilarang melakukan kecurangan</Text>
        <Text style={styles.tabContentDesc}>4. Dilarang menggunakan cheat</Text>
        <Text style={styles.tabContentDesc}>5. Dilarang menggunakan program ilegal</Text>
        <Text style={styles.tabContentDesc}>6. Dilarang berkata kasar, rasis, atau hal negatif</Text>
        <Text style={styles.tabContentDesc}>7. Dilarang double slot atau tim</Text>
    </ScrollView>
);
const ThirdRoute = () => (
    <ScrollView style={styles.scene}>
        <View style={styles.tabOverview}>
            <View style={{marginRight: 45}}>
                <Text style={styles.tabOverviewTitle}>1st Place</Text>
                <Text style={styles.tabOverviewTitle}>2nd Place</Text>
                <Text style={styles.tabOverviewTitle}>3rd Place</Text>
                <Text style={styles.tabOverviewTitle}>4th - 32nd Place</Text>
            </View>
            <View>
                <Text style={styles.tabContentDesc}>Rp500.000 + e-Certificate</Text>
                <Text style={styles.tabContentDesc}>Rp300.000 + e-Certificate</Text>
                <Text style={styles.tabContentDesc}>Rp200.000 + e-Certificate</Text>
                <Text style={styles.tabContentDesc}>e-Certificate</Text>
            </View>
        </View>
    </ScrollView>
);
const FourthRoute = () => (
    <ScrollView style={styles.scene}>
        <View style={styles.standingsHeading}>
            <Text style={styles.tabTitle}>Standing</Text>
            <View style={styles.viewBracket}>
                <Text style={styles.status}>View Bracket</Text>
            </View>
        </View>
        <View style={styles.standingsBox}>
            <View style={styles.standingTeams}>
                <View style={{marginRight: 19}}>
                    <Text style={styles.standing}>1</Text>
                    <Text style={styles.standing}>2</Text>
                    <Text style={styles.standing}>3</Text>
                </View>
                <View style={{marginRight: 9}}>
                    <FontAwesome name="group" size={20} color="#ffffff" marginBottom={10} />
                    <FontAwesome name="group" size={20} color="#ffffff" marginBottom={10} />
                    <FontAwesome name="group" size={20} color="#ffffff" marginBottom={10} />
                </View>
                <View>
                    <Text style={styles.standing}>Team F</Text>
                    <Text style={styles.standing}>Team H</Text>
                    <Text style={styles.standing}>Team A</Text>
                </View>
            </View>
        </View>
        <Text style={[styles.tabTitle, {marginBottom: 15}]}>Participants</Text>
        <FlatList
            data={participants}
            renderItem={({ item }) => (<ParticipantCard name={item.name} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            numColumns={3}
        />
    </ScrollView>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
});
  

export default function TournamentInfo() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Overview' },
      { key: 'second', title: 'Rules' },
      { key: 'third', title: 'Prizes' },
      { key: 'fourth', title: 'Participants'},
    ]);
    

    return (
        <View style={styles.outerContainer}>
            <View style={styles.imageContainer}>
                <Image source={{uri: 'https://us.v-cdn.net/6036147/uploads/GOQOTHGYG807/l-18-1-1200x675.jpg'}} style={styles.image} />
                <LinearGradient colors={['transparent', '#1E293B']} style={styles.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.statusBox}>
                    <Text style={styles.status}>Ongoing</Text>
                </View>
                <View style={styles.tournamentHeading}>
                    <View>
                    <Text style={styles.title}>Pixel Power 2024</Text>
                    <View style={styles.timeContainer}>
                        <AntDesign name="calendar" size={17} color="#ffffff" />
                        <Text style={[styles.time, {marginLeft: 3}, {marginRight: 8}]}>January 1st, 2024</Text>
                        <Ionicons name="time" size={17} color="#ffffff" />
                        <Text style={[styles.time, {marginLeft: 2}]}>13.00</Text>
                    </View>
                    </View>
                    <View style={styles.participantContainer}>
                        <Text style={styles.participant}>8</Text>
                        <Text style={styles.totalParticipant}>/8 team</Text>
                    </View>
                </View>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={props => (
                        <TabBar 
                            {...props} 
                            style={{backgroundColor: 'transparent'}} 
                            indicatorStyle={{backgroundColor: '#ffffff'}}
                            labelStyle={{color: '#ffffff', fontSize: 13}}
                            tabStyle={{padding: 0}}
                            renderLabel={({ route, focused, color }) => (
                                <Text style={{color, opacity: focused ? 1 : 0.5}} numberOfLines={1}>
                                    {route.title}
                                </Text>
                            )}
                        />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#1E293B',
    },
    imageContainer: {
        width: screenWidth,
        height: 220,
        overflow: 'hidden',
    },
    image: {
        width: screenWidth,
        height: 220,
        position: 'absolute',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '50%',
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 25,
    },
    statusBox: {
        backgroundColor: '#8859C5',
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 5,
        alignSelf: 'flex-start',
    },
    status: {
        fontSize: 12,
        color: '#ffffff',
        // marginTop: 10,
    },
    tournamentHeading:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title:{
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    timeContainer:{
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    time:{
        fontSize: 13,
        color: '#ffffff',
        // marginTop: 5,
    },
    participantContainer:{
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 'auto',
    },
    participant:{
        fontSize: 48,
        color: '#ffffff',
        textAlign: 'right',
    },
    totalParticipant:{
        fontSize: 14,
        color: '#ffffff',
    },
    scene: {
        flex: 1,
        paddingTop: 20,
        // justifyContent: 'space-between',
        // alignSelf: 'flex-start',
    },
    tabOverview: {
        color: '#ffffff',
        fontSize: 13,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    tabOverviewTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 13,
        paddingBottom: 10,
    },
    tabContentDesc: {
        color: '#ffffff',
        fontSize: 13,
        paddingBottom: 10,
    },
    tabTitle: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        // paddingBottom: 10,
    },
    standingsBox: {
        backgroundColor: '#36455D',
        width: '100%',
        height: 117,
        marginTop: 5,
        marginBottom: 20,
        borderRadius: 15,
        paddingHorizontal: 8,
        paddingVertical: 5,
        alignSelf: 'flex-start',
    },
    card: {
        backgroundColor: '#36455D',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        width: 101,
        height: 105,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 16,
        color: '#ffffff',
    },
    standingsHeading:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    viewBracket: {
        backgroundColor: '#4945F7',
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
        alignSelf: 'flex-start',
    },
    standing: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 10,
    },
    standingTeams: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 15,
    },
});