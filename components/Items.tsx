import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

export default function Items() {
  const data = [
    {
      id: '0',
      name: 'Offers',
      description: 'Upto 50% off',
      image: 'https://cdn-icons-png.flaticon.com/128/9356/9356378.png',
    },
    {
      id: '1',
      name: 'Legends',
      description: 'Across Pakistan',
      image: 'https://cdn-icons-png.flaticon.com/128/8302/8302686.png',
    },
    {
      id: '2',
      name: 'Gourmet',
      description: 'Selections',
      image: 'https://cdn-icons-png.flaticon.com/128/1065/1065715.png',
    },
    {
      id: '3',
      name: 'Healthy',
      description: 'Curated dishes',
      image: 'https://cdn-icons-png.flaticon.com/128/415/415744.png',
    },
  ];

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>EXPLORE</Text>
        <Text style={styles.subHeaderText}>Discover new categories and exclusive deals</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    letterSpacing: 2,
    color: '#333', // Darker for a modern look
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#6B7280', // Subtle grey
    marginTop: 5,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 0,
    marginBottom:10,
  },
  card: {
    width: 110,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    transform: [{ scale: 1 }],
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 10,
    borderRadius: 35, // Makes the image circular for a modern touch
    borderWidth: 2,
    borderColor: '#FF8C42',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937', // Darker grey for contrast
    marginBottom: 4,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 12,
    color: '#6B7280', // Subtle grey for secondary text
    textAlign: 'center',
  },
});
