import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

export default function MenuItem({item}) {
  return (
    <View>
      <Pressable style={{ margin: 10, flexDirection: "row", justifyContent: "space-between", marginVertical: 15,}}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600", width: 220 }}>
            {item?.name}
          </Text>
          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            ₹{item?.price}
          </Text>
          <Text style={{ marginTop: 5, borderRadius: 4,}}>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome key={i} style={{ paddingHorizontal: 3 }} name={i < Math.floor(item.rating) ? "star" : "star-o"} size={15} color="#FFD700" />
            ))}
          </Text>
          </View>
          </Pressable>
    </View>
  )
}