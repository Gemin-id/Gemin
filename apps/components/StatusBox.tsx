import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusBoxProps {
    isRegistrationClosed: boolean;
}

const StatusBox: React.FC<StatusBoxProps> = ({ isRegistrationClosed }) => {
    const statusBoxColor = isRegistrationClosed ? '#8859C5' : '#389F7A';
    const statusText = isRegistrationClosed ? 'Ongoing' : 'Open';

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
