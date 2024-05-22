import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const participants = [
    'Team A', 'Team B', 'Team C', 'Team D',
    'Team E', 'Team F', 'Team G', 'Team H'
];

const score = [
    0, 1, 2, 3
];

const matches = [
    // First round
    [
        { matchNumber: 1, team1: participants[0], score1: score[2], team2: participants[1], score2: score[0] },
        { matchNumber: 2, team1: participants[2], score1: score[1], team2: participants[3], score2: score[2] },
        { matchNumber: 3, team1: participants[4], score1: score[0], team2: participants[5], score2: score[2] },
        { matchNumber: 4, team1: participants[6], score1: score[1], team2: participants[7], score2: score[3] },
    ],
    // Second round
    [
        { matchNumber: 5, team1: participants[0], score1: score[2], team2: participants[3], score2: score[1] },
        { matchNumber: 6, team1: participants[5], score1: score[0], team2: participants[7], score2: score[2] },
    ],
    // Final round
    [
        { matchNumber: 7, team1: participants[0], score1: score[3], team2: participants[7], score2: score[0] },
    ],
];

type Match = {
    matchNumber: number;
    team1: string;
    score1: number;
    team2: string;
    score2: number;
};

type RoundProps = {
    matches: Match[];
    roundNumber: number;
};

const Match = ({ matchNumber, team1, score1, team2, score2 }: Match) => (
    <View style={styles.matchContainer}>
      <Text style={styles.matchNumber}>Match {matchNumber}</Text>
      <View style={[styles.teamContainer, score1 > score2 ? styles.winningTeam : {}]}>
        <Text style={styles.matchText}>{team1}</Text>
        <Text style={styles.scoreText}>{score1}</Text>
      </View>
      <View style={[styles.teamContainer, score2 > score1 ? styles.winningTeam : {}]}>
        <Text style={styles.matchText}>{team2}</Text>
        <Text style={styles.scoreText}>{score2}</Text>
      </View>
    </View>
  );

const baseGap = 75;
const Round = ({ matches, roundNumber }: RoundProps) => (
    <View style={styles.roundContainer}>
      {matches.map((match, index) => {
        const marginTop = roundNumber > 1 && index !== 0 ? roundNumber * baseGap : 0;
        return (
          <View key={index} style={{ flexDirection: 'row' }}>
            <View style={[styles.matchContainer, { marginTop: marginTop }]}>
              <Match matchNumber={index + 1} team1={match.team1} score1={match.score1} team2={match.team2} score2={match.score2} />
            </View>
            {index < matches.length - 1 && (
              <View style={{ borderLeftWidth: 1, borderColor: '#ffffff', flex: 1 }} />
            )}
          </View>
        );
      })}
    </View>
  );

export default function BracketScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Pixel Power 2024</Text>
            <Text style={styles.subtitle}>01/25/2024  -  13:00</Text>
            <ScrollView>
                <ScrollView horizontal>
                    <View style={styles.bracketContainer}>
                        {matches.map((round, index) => (
                            <Round key={index} matches={round} roundNumber={index + 1} />
                        ))}
                    </View>
                </ScrollView>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E293B',
        paddingVertical: 17,
        paddingHorizontal: 20,
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    subtitle: {
        color: '#ffffff',
        fontSize: 13,
        marginBottom: 25,
        textAlign: 'center',
    },
    bracketContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    roundContainer: {
        alignItems: 'center',
        marginRight: 30,
    },
    matchContainer: {
        marginBottom: 10,
    },
    teamContainer: {
        backgroundColor: '#36455D',
        padding: 12,
        borderRadius: 10,
        marginBottom: 6,
        // alignItems: 'center',
        justifyContent: 'space-between',
        width: 125,
        flexDirection: 'row',
    },
    matchText: {
        color: '#ffffff',
        fontSize: 16,
        // textAlign: 'center',
    },
    scoreText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'right',
    },
    matchNumber: {
        color: '#ffffff',
        fontSize: 11,
        marginBottom: 5,
    },
    winningTeam: {
        borderColor: '#389F7A',
        borderWidth: 2,
        backgroundColor: '#19212D',
    },
});