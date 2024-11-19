import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';

interface Img {
  id: string;
  image: string;
  description: string;
}

interface hotel {
  id: string;
  featured_image: string;
  images?: Img[];
  name: string;
  cuisines: string;
  time: string;
  average_cost_for_two?: number;
  aggregate_rating: number;
  adress: string;
  smalladress: string;
  offer: string;
  no_of_Delivery: number;
  latitude: number;
  longitude: number;
}

interface HotelProps {
  item: hotel;
}

const Hotel = ({ item }: HotelProps) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: '/hotel',
          params: {
            id: item.id,
            name: item.name,
            address: item.adress,
            smalladress: item.smalladress,
            cuisines: item.cuisines,
            aggregate_rating: item.aggregate_rating,
          },
        })
      }
      style={styles.container}
    >
      {/* Image */}
      <Image
        style={styles.image}
        source={{ uri: item?.featured_image }}
        resizeMode="cover"
      />

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.infoSection}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.cuisines}>{item?.cuisines}</Text>
          <Text style={styles.time}>{item?.time}</Text>
        </View>

        {/* Rating */}
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{item?.aggregate_rating}</Text>
          <AntDesign name="staro" size={18} color="white" />
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Offer */}
      <View style={styles.offerSection}>
        <FontAwesome5 name="percentage" size={18} color="#1F75FE" />
        <Text style={styles.offerText}>20% off up to Rs 100</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 12,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  infoSection: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cuisines: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#006A4E',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ratingText: {
    color: 'white',
    marginRight: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 12,
  },
  offerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  offerText: {
    marginLeft: 8,
    color: '#1F75FE',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default Hotel;
