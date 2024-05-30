import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function BodySearch() {
  const [searchText, setSearchText] = useState('')

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Ionicons name="search" size={24} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Find Tournaments"
          placeholderTextColor="#B0B0B0"
          value={searchText}
          onChangeText={setSearchText}
        />
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
  input: {
    color: 'white',
    fontSize: 15,
    flex: 1,
  },
})
