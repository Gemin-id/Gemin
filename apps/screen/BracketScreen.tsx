import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const participants = [
    'Team A', 'Team B', 'Team C', 'Team D',
    'Team E', 'Team F', 'Team G', 'Team H'
];

const matches = [
    // First round
    [
        { match: 1, team1: participants[0], team2: participants[1] },
        { match: 2, team1: participants[2], team2: participants[3] },
        { match: 3, team1: participants[4], team2: participants[5] },
        { match: 4, team1: participants[6], team2: participants[7] },
    ],
    // Second round
    [
        { match: 5, team1: 'Winner of Match 1', team2: 'Winner of Match 2' },
        { match: 6, team1: 'Winner of Match 3', team2: 'Winner of Match 4' },
    ],
    // Final round
    [
        { match: 7, team1: 'Winner of Match 5', team2: 'Winner of Match 6' },
    ],
];

type Team = {
    team1: string;
    team2: string;
};

type Match = {
    team1: string;
    team2: string;
};

type RoundProps = {
    matches: Match[];
};

const Match = ({ team1, team2 }: Team) => (
    <View style={styles.matchContainer}>
        <Text style={styles.matchText}>{team1}</Text>
        <Text style={styles.vsText}>vs</Text>
        <Text style={styles.matchText}>{team2}</Text>
    </View>
);

const Round = ({ matches }: RoundProps) => (
    <View style={styles.roundContainer}>
        {matches.map((match, index) => (
            <Match key={index} team1={match.team1} team2={match.team2} />
        ))}
    </View>
);

export default function BracketScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Pixel Power 2024</Text>
            <ScrollView horizontal>
                <View style={styles.bracketContainer}>
                    {matches.map((round, index) => (
                        <Round key={index} matches={round} />
                    ))}
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E293B',
        padding: 20,
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    bracketContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    roundContainer: {
        alignItems: 'center',
    },
    matchContainer: {
        backgroundColor: '#36455D',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: 150,
    },
    matchText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    vsText: {
        color: '#ffffff',
        fontSize: 14,
        marginVertical: 5,
        textAlign: 'center',
    },
});
