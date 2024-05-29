import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import * as React from 'react';
// import { ScrollView } from 'react-native-gesture-handler';

const tournamentName = [
    'Pixel Power 2024',
    'All Star Event',
    'Big Versus',
    'Porak Online',
    'FF Cikeruh',
];


const tournamentStanding = [
    '1st',
    '2nd',
    '3rd',
];

const gameName = [
    'Mobile Legends',
    'Mobile Legends',
    'Mobile Legends',
    'Mobile Legends',
    'Free Fire',
];

const gameDate = [
    '01/01/2024',
    '02/29/2023',
    '03/03/2023',
    '04/14/2023',
    '12/01/2023',
];

const teamName = [
    'Team A',
    'Team B',
    'Team C',
];

const teamMembers = [
    ['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5'],
];

const tournamentID = [
    '123123',
    '321321',
    '456456',
    '654654',
    '789789',
];

const registrationFee = [
    '10.000',
    '15.000',
    '20.000',
];

const images = [
    'https://us.v-cdn.net/6036147/uploads/GOQOTHGYG807/l-18-1-1200x675.jpg',
    'https://www.blibli.com/friends-backend/wp-content/uploads/2023/10/B1000695-Cover-daftar-tournament-e-sport-indonesia.jpg',
    'https://media.licdn.com/dms/image/C4E12AQG2fk46LjYHHQ/article-cover_image-shrink_720_1280/0/1563894791754?e=2147483647&v=beta&t=GvhZh0uvobpTzM4wY30cr6dKKHK7GkdBSyw3jf_oAd8',
    'https://ichef.bbci.co.uk/news/976/cpsprodpb/09A3/production/_85976420_fwvspng.jpg',
    'https://www.androidauthority.com/wp-content/uploads/2019/03/esports-tournaments-leagues-featured.jpg',
];

const tournaments = tournamentName.map((name, index) => ({
    name,
    standing: tournamentStanding[index % tournamentStanding.length],
    gameName: gameName[index % gameName.length],
    gameDate: gameDate[index % gameDate.length],
    teamName: teamName[index % teamName.length],
    members: teamMembers[index % teamMembers.length],
    tournamentID: tournamentID[index % tournamentID.length],
    registrationFee: registrationFee[index % registrationFee.length],
    image: images[index % images.length],
}));

export default function HistoryScreen() {
    return (
        <View>
            <Text>History Screen</Text>
        </View>
    )
}