import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Horizontal() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        Horizontal
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    marginTop: 10,
    backgroundColor: 'black',
    height: 200,
  },
  font: {
    marginLeft: 20,
    fontFamily: "DM Sans Medium",
    fontSize: 18,
    color: 'white',
  },
});