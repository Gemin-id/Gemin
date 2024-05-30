import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface FloatingButtonProps {
    onPress: () => void;
    disabled: boolean;
    price?: string;
    buttonText: string;
    justifyContent?: 'space-between' | 'center';
}

const FloatingButton = ({ onPress, disabled, price, buttonText, justifyContent = 'space-between' }: FloatingButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.floatingButton,
                { backgroundColor: '#4598F7', justifyContent },
            ]}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={{ ...styles.buttonText, fontSize: 15, color: '#ffffff', fontWeight: 'bold' }}>{buttonText}</Text>
            {price && <Text style={{ ...styles.buttonText, fontSize: 20, color: '#EADE75', fontWeight: 'bold' }}>{price}</Text>}
            {disabled && <View style={styles.disabledOverlay} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    floatingButton: {
        width: '100%',
        height: 50,
        alignItems: 'center',
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

export default FloatingButton;
