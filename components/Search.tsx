import { View, TextInput, } from 'react-native'
import Fontisto from "@expo/vector-icons/Fontisto";
import React from 'react'

export default function Search() {
  return (
    <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "#DDD",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      marginTop: 12,
      marginHorizontal: 10,
      backgroundColor: "#F9F9F9",
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 2,
    }}
  >
    <TextInput
      placeholder="Search for Food, Hotel"
      placeholderTextColor="#BBB"
      style={{ flex: 1, fontSize: 15, color: "#333" }}
    />
    <Fontisto name="search" size={22} color="#FF4D4D" />
  </View>
  )
}