import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const participants = [
  'Team A', 'Team B', 'Team C', 'Team D',
  'Team E', 'Team F', 'Team G', 'Team H',
  'Team I', 'Team J', 'Team K', 'Team L',
  'Team M', 'Team N', 'Team O', 'Team P'
];

const score = [
  0, 1, 2, 3
];

const initialMatches = [
  [
    { matchNumber: 1, team1: participants[0], score1: score[2], team2: participants[1], score2: score[0] },
    { matchNumber: 2, team1: participants[2], score1: score[1], team2: participants[3], score2: score[2] },
    { matchNumber: 3, team1: participants[4], score1: score[0], team2: participants[5], score2: score[2] },
    { matchNumber: 4, team1: participants[6], score1: score[1], team2: participants[7], score2: score[3] },
    { matchNumber: 5, team1: participants[8], score1: score[2], team2: participants[9], score2: score[1] },
    { matchNumber: 6, team1: participants[10], score1: score[0], team2: participants[11], score2: score[2] },
    { matchNumber: 7, team1: participants[12], score1: score[1], team2: participants[13], score2: score[3] },
    { matchNumber: 8, team1: participants[14], score1: score[2], team2: participants[15], score2: score[0] }
  ],
  [
    { matchNumber: 1, team1: participants[0], score1: 1, team2: participants[3], score2: 0 },
    { matchNumber: 2, team1: participants[5], score1: 1, team2: participants[7], score2: 0 },
    { matchNumber: 3, team1: participants[9], score1: 1, team2: participants[11], score2: 0 },
    { matchNumber: 4, team1: participants[13], score1: 1, team2: participants[15], score2: 0 }
  ],
  [
    { matchNumber: 1, team1: participants[0], score1: 1, team2: participants[7], score2: 0 },
    { matchNumber: 2, team1: participants[11], score1: 1, team2: participants[15], score2: 0 }
  ],
  [
    { matchNumber: 1, team1: participants[0], score1: 1, team2: participants[15], score2: 0 }
  
  ]
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
};

const getWinner = (match: Match) => {
  return match.score1 > match.score2 ? match.team1 : match.team2;
};

const generateNextRound = (currentRound: Match[]) => {
  const nextRound = [];
  for (let i = 0; i < currentRound.length; i += 2) {
    const match1 = currentRound[i];
    const match2 = i + 1 < currentRound.length ? currentRound[i + 1] : null;
    if (match1 && match2) {
      const match1Winner = getWinner(match1);
      const match2Winner = getWinner(match2);
      nextRound.push({
        matchNumber: nextRound.length + 1,
        team1: match1Winner,
        score1: 0,
        team2: match2Winner,
        score2: 0,
      });
    }
  }
  return nextRound.length ? nextRound : null;
};


const Match = ({ matchNumber, team1, score1, team2, score2, hasNextRound, hasPrevRound }: Match & { hasNextRound: boolean, hasPrevRound: boolean }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    { hasPrevRound && <View style={styles.horizontalLine} /> }
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
    {hasNextRound && <View style={styles.horizontalLine} />}
  </View>
);


const Round = ({ matches, hasNextRound, hasPrevRound }: RoundProps & { hasNextRound: boolean, hasPrevRound: boolean }) => (
  <View style={styles.roundContainer}>
    {matches.map((match, index) => (
      <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Match
          matchNumber={match.matchNumber}
          team1={match.team1}
          score1={match.score1}
          team2={match.team2}
          score2={match.score2}
          hasNextRound={hasNextRound}
          hasPrevRound={hasPrevRound}
        />
        {index % 2 === 0 && hasNextRound && (
          <View style={styles.verticalLine} />
        )}
      </View>
    ))}
  </View>
);


export default function BracketScreen() {
  const [rounds, setRounds] = useState(initialMatches);

  useEffect(() => {
    // const newRounds = [...rounds];
    // for (let i = 0; i < rounds.length; i++) {
    //   const nextRound = generateNextRound(rounds[i]);
    //   if (nextRound) {
    //     newRounds.push(nextRound);
    //   }
    // }
    // setRounds(newRounds); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pixel Power 2024</Text>
      <Text style={styles.subtitle}>01/25/2024 - 13:00</Text>
      <ScrollView>
        <ScrollView horizontal>
          <View style={styles.bracketContainer}>
            {rounds.map((round, index) => (
              <Round key={index} matches={round} hasNextRound={index < rounds.length - 1} hasPrevRound={index > 0} />
              
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
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
    alignItems: 'center',
  },
  roundContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  matchContainer: {
    marginBottom: 10,
    // gap: 10,
  },
  teamContainer: {
    backgroundColor: '#36455D',
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
    justifyContent: 'space-between',
    width: 125,
    flexDirection: 'row',
  },
  matchText: {
    color: '#ffffff',
    fontSize: 16,
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
  verticalLine: {
    width: 2,
    height: '100%',
    backgroundColor: '#ffffff',
    marginTop: 141,
  },
  horizontalLine: {
    width: 15,
    height: 2,
    backgroundColor: '#ffffff',
    left: 0,
  },
});