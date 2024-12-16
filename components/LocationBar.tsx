import { View, Text, Pressable } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React from 'react'

interface LocationBarProps {
    currentAddress: string; // Explicitly type the prop as string
  }

  const LocationBar: React.FC<LocationBarProps> = ({ currentAddress })=> {
  return (
    <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      paddingVertical: 12,
      paddingHorizontal: 15,
      backgroundColor:"#041124",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      borderRadius: 8,
      marginHorizontal: 10,
      marginTop: 10,
    }}
  >
    <EvilIcons name="location" size={28} color="pink" />
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>Deliver To</Text>
      <Text style={{ color: "cyan", fontSize: 14, marginTop: 2 }}>{currentAddress}</Text>
    </View>
    <Pressable
      style={{
        backgroundColor: "#5C9DFF",
        width: 42,
        height: 42,
        borderRadius: 21,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#5C9DFF",
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 4,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFF" }}>P</Text>
    </Pressable>
  </View>
  )
}
export default LocationBar;