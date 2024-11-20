import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

interface Item {
  id: string;
  name: string;
}

export default function Categories() {
  const items: Item[] = [
    { id: '1', name: 'Fastest Delivery' },
    { id: '2', name: 'Rating 4.0+' },
    { id: '3', name: 'Offers' },
    { id: '4', name: 'Cuisines' },
    { id: '5', name: 'MAX Safety' },
    { id: '6', name: 'Pro' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#F9F9F9', // Light neutral background for contrast
  },
  button: {
    marginHorizontal: 8,
    borderRadius: 20,
    overflow: 'hidden', // Ensures the gradient doesn't spill over the border radius
  },
  buttonContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF6F61',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
});
