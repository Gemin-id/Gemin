 import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusBoxProps {
    status: string;
}

const StatusBox: React.FC<StatusBoxProps> = ({ status }) => {
    let statusBoxColor;
    let statusText;

    switch (status) {
        case 'Ongoing':
            statusBoxColor = '#8859C5';
            statusText = 'Ongoing';
            break;
        case 'Open':
            statusBoxColor = '#389F7A';
            statusText = 'Open';
            break;
        // Add more cases as necessary
        default:
            statusBoxColor = '#C55959'; // Default color if status is not recognized
            statusText = status; // Default to showing the status text
            break;
    }

    return (
        <View style={[styles.statusBox, { backgroundColor: statusBoxColor }]}>
            <Text style={styles.status}>{statusText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    statusBox: {
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
});

export default StatusBox;
