import { View, Text, Image, Dimensions, useWindowDimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import * as React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;

const images = [
    'https://us.v-cdn.net/6036147/uploads/GOQOTHGYG807/l-18-1-1200x675.jpg'
];

const tournament = [
    { tournamentName: 'Pixel Power 2024', tournamentDate: 'January 1st, 2024', tournamentTime: '13.00' }, 
];

const overview = [
    { game: 'Mobile Legends', organizer: 'Pixel Tournaments', tournamentFormat: 'Single Elimination' },
];

const participants = [
    { currentParticipants: '7', totalParticipants: '8' },
];

const schedule = [
    { bracketNumber: 1, date: 'February 29th, 2024', time: '13.00' },
    { bracketNumber: 2, date: 'February 29th, 2024', time: '19.00' },
    { bracketNumber: 3, date: 'March 1st, 2024', time: '13.00' },
];

const prize = [
    { place: '1st', prize: 'Rp500.000 + e-Certificate' },
    { place: '2nd', prize: 'Rp300.000 + e-Certificate' },
    { place: '3rd', prize: 'Rp200.000 + e-Certificate' },
    { place: '4th - 32nd', prize: 'e-Certificate' },
];

const team = [
    { id: '1', teamName: 'Team A' },
    { id: '2', teamName: 'Team B' },
    { id: '3', teamName: 'Team C' },
    { id: '4', teamName: 'Team D' },
    { id: '5', teamName: 'Team E' },
    { id: '6', teamName: 'Team F' },
    { id: '7', teamName: 'Team G' },
    { id: '8', teamName: 'Team H' }
];

interface ParticipantCardProps {
    teamName: string;
  }

const ParticipantCard = ({ teamName }: ParticipantCardProps) => (
    <View style={styles.card}>
        <FontAwesome name="group" size={24} color="#ffffff" marginTop={5} marginBottom={10} />
        <Text style={styles.cardTitle}>{teamName}</Text>
    </View>
);

const FirstRoute = () => (
    <ScrollView style={styles.scene}>
        <View style={styles.tabOverview}>
            <View style={{ marginRight: 45 }}>
                <Text style={styles.tabOverviewTitle}>Game</Text>
                <Text style={styles.tabOverviewTitle}>Organizer</Text>
                <Text style={styles.tabOverviewTitle}>Tournament Format</Text>
            </View>
            <View>
                {overview.map((item, index) => (
                    <View key={index}>
                        <Text style={styles.tabContentDesc}>{item.game}</Text>
                        <Text style={styles.tabContentDesc}>{item.organizer}</Text>
                        <Text style={styles.tabContentDesc}>{item.tournamentFormat}</Text>
                    </View>
                ))}
            </View>
        </View>
        <Text style={[styles.tabTitle, { marginTop: 5 }]}>Schedule</Text>
        <View style={[styles.tabOverview, { paddingTop: 10 }]}>
            <View style={{ marginRight: 45 }}>
                {schedule.map((item, index) => (
                    <Text key={index} style={styles.tabOverviewTitle}>Bracket {item.bracketNumber}</Text>
                ))}
            </View>
            <View>
                {schedule.map((item, index) => (
                    <Text key={index} style={styles.tabContentDesc}>{item.date}</Text>
                ))}
            </View>
            <View style={{ marginLeft: 30 }}>
                {schedule.map((item, index) => (
                    <Text key={index} style={styles.tabContentDesc}>{item.time}</Text>
                ))}
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
            <View style={{ marginRight: 45 }}>
                {prize.map((item, index) => (
                    <Text key={index} style={styles.tabOverviewTitle}>{item.place} Place</Text>
                ))}
            </View>
            <View>
                {prize.map((item, index) => (
                    <Text key={index} style={styles.tabContentDesc}>{item.prize}</Text>
                ))}
            </View>
        </View>
    </ScrollView>
);
const FourthRoute = () => {
    const isRegistrationClosed = participants[0].currentParticipants === participants[0].totalParticipants;

    return (
        <ScrollView style={styles.scene}>
            {isRegistrationClosed && (
                <>
                    <View style={styles.standingsHeading}>
                        <Text style={styles.tabTitle}>Standing</Text>
                        <TouchableOpacity style={styles.viewBracket}>
                            <Text style={styles.status}>View Bracket</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.standingsBox}>
                        <View style={styles.standingTeams}>
                            <View style={{ marginRight: 19 }}>
                                <Text style={styles.standing}>1</Text>
                                <Text style={styles.standing}>2</Text>
                                <Text style={styles.standing}>3</Text>
                            </View>
                            <View style={{ marginRight: 9 }}>
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
                </>
            )}
            <Text style={[styles.tabTitle, { marginBottom: 15 }]}>Participants</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {team.map((item) => (
                    <ParticipantCard key={item.id} teamName={item.teamName} />
                ))}
            </View>
            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
});

export default function TournamentInfo() {
    const navigation = useNavigation();
    const handleRegisPress = () => {
        navigation.navigate('Registration');
      };

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Overview' },
        { key: 'second', title: 'Rules' },
        { key: 'third', title: 'Prizes' },
        { key: 'fourth', title: 'Participants' },
    ]);

    const isRegistrationClosed = participants[0].currentParticipants === participants[0].totalParticipants;
    const statusBoxColor = isRegistrationClosed ? '#8859C5' : '#389F7A';
    const statusText = isRegistrationClosed ? 'Ongoing' : 'Open';

    return (
        <View style={styles.outerContainer}>
            <View style={styles.imageContainer}>
            {images.map((image, index) => (
            <Image key={index} source={{uri: image}} style={styles.image} />
            ))}
                <LinearGradient colors={['transparent', '#1E293B']} style={styles.gradient} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
            </View>
            <View style={styles.innerContainer}>
                <View style={[styles.statusBox, { backgroundColor: statusBoxColor }]}>
                    <Text style={styles.status}>{statusText}</Text>
                </View>
                <View style={styles.tournamentHeading}>
                    <View>
                        {tournament.map((item, index) => (
                            <View key={index}>
                                <Text style={styles.title}>{item.tournamentName}</Text>
                                <View style={styles.timeContainer}>
                                    <AntDesign name="calendar" size={17} color="#ffffff" />
                                    <Text style={[styles.time, { marginLeft: 3 }, { marginRight: 8 }]}>{item.tournamentDate}</Text>
                                    <Ionicons name="time" size={17} color="#ffffff" />
                                    <Text style={[styles.time, { marginLeft: 2 }]}>{item.tournamentTime}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    {participants.map((item, index) => (
                        <View key={index} style={styles.participantContainer}>
                            <Text style={styles.participant}>{item.currentParticipants}</Text>
                            <Text style={styles.totalParticipant}>/{item.totalParticipants} team</Text>
                        </View>
                    ))}
                </View>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={props => (
                        <TabBar
                            {...props}
                            style={{ backgroundColor: 'transparent' }}
                            indicatorStyle={{ backgroundColor: '#ffffff' }}
                            labelStyle={{ color: '#ffffff', fontSize: 13 }}
                            tabStyle={{ padding: 0 }}
                            renderLabel={({ route, focused, color }) => (
                                <Text style={{ color, opacity: focused ? 1 : 0.5 }} numberOfLines={1}>
                                    {route.title}
                                </Text>
                            )}
                        />
                    )}
                />
                <TouchableOpacity 
                    style={[
                        styles.floatingButton, 
                        { backgroundColor: '#4598F7' }, 
                    ]}
                    disabled={isRegistrationClosed}
                    onPress={handleRegisPress}
                >
                    <Text style={{ ...styles.buttonText, fontSize: 15, color: '#ffffff', fontWeight: 'bold' }}>Register Now!</Text>
                    <Text style={{ ...styles.buttonText, fontSize: 20, color: '#EADE75', fontWeight: 'bold' }}>Rp15.000</Text>
                    {isRegistrationClosed && <View style={styles.disabledOverlay} />}
                </TouchableOpacity>
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
    },
    tournamentHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    timeContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontSize: 13,
        color: '#ffffff',
    },
    participantContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 'auto',
    },
    participant: {
        fontSize: 48,
        color: '#ffffff',
        textAlign: 'right',
    },
    totalParticipant: {
        fontSize: 14,
        color: '#ffffff',
    },
    scene: {
        flex: 1,
        paddingTop: 20,
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
    standingsHeading: {
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
    floatingButton: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#4598F7',
        borderRadius: 10,
        bottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2.5,
        flexDirection: 'row',
        position: 'relative',
    },
    buttonText: {
        fontSize: 15,
        color: '#ffffff',
    },
    disabledOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000000',
        opacity: 0.3,
        borderRadius: 10,
    },
});
