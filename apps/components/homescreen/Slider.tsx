import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function Slider({sliderList}:any) {
  return (
    <View>
      <FlatList 
        data={sliderList}
        renderItem={({item, index}:any) => (
          <View>
            <Text>{index}</Text>
          </View>
        )}
        keyExtractor={(item:any) => item.id}
        />
    </View>
  )
}