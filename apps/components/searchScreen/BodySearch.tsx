import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function BodySearch() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Ionicons name="search" size={24} color="white" style={styles.icon} />
        <Text style={styles.font}>Find Tournaments</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    height: 80,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#36455D',
    marginTop: 20,
    height: 50,
    width: 330,
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  font: {
    color: 'white',
    fontSize: 15,
    textAlign: 'left',
    paddingLeft: 10,
  },
})
