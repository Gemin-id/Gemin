import React from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';

const notificationTitle = [
    'A new tournament has opened!',
    'Notification Title 2',
    'Notification Title 3',
    'Notification Title 4',
    'Notification Title 5',
];

const notificationContent = [
    'Lucky Star just opened its registration! Stay updated and join the action now!',
    'Notification Content 2',
    'Notification Content 3',
    'Notification Content 4',
    'Notification Content 5',
];

const notifications = notificationTitle.map((title, index) => ({
    title,
    content: notificationContent[index],
}));

interface NotificationScreenProps {
    sidebarWidth: Animated.Value;
    sidebarTranslateX: Animated.Value;
    closeSidebar: () => void;
}

export default function NotificationScreen({ sidebarWidth, sidebarTranslateX, closeSidebar }: NotificationScreenProps) {
    return (
        <Animated.View style={[styles.sidebar, { width: sidebarWidth, transform: [{ translateX: sidebarTranslateX }] }]}>
            <View style={{ height: 30 }} />
            <Text style={styles.sidebarText}>Notifications</Text>
            <View style={{ height: 20 }} />
            {notifications.map((notification, index) => (
                <TouchableOpacity key={index} onPress={closeSidebar}>
                    <Text style={[styles.sidebarText, { fontSize: 13, marginTop: 14 }]}>{notification.title}</Text>
                    <Text style={[styles.sidebarText, { fontSize: 10, marginTop: 5, opacity: 0.8 }]}>{notification.content}</Text>
                    <View style={[styles.horizontalLine, { marginTop: 14 }]} />
                </TouchableOpacity>
            ))}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#0E1A2E',
        padding: 20,
        zIndex: 10,
        elevation: 10, // Add this for Android
    },
    sidebarText: {
        color: '#ffffff',
        fontSize: 20,
    },
    horizontalLine: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#ffffff',
        marginTop: 10,
    },
});
