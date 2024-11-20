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
      <Image
        style={styles.image}
        source={{ uri: item?.featured_image }}
        resizeMode="cover"
      />

      <View style={styles.details}>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.cuisines}>{item?.cuisines}</Text>
        <Text style={styles.time}>{item?.time}</Text>
      </View>

      <View style={styles.ratingContainer}>
        <AntDesign name="star" size={14} color="#FFFFFF" />
        <Text style={styles.ratingText}>{item?.aggregate_rating}</Text>
      </View>

      <View style={styles.offerBanner}>
        <FontAwesome5 name="percentage" size={18} color="#1E90FF" />
        <Text style={styles.offerText}>{item?.offer}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  details: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#F4F4F4',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  cuisines: {
    fontSize: 14,
    color: '#7D7D7D',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#AAAAAA',
  },
  ratingContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#FF8C00',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  offerBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F0F8FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  offerText: {
    marginLeft: 10,
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Hotel;
