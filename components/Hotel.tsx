import { View, Text, Pressable, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { useRouter } from 'expo-router';

const router = useRouter()

// Define the Image interface
interface Img {
  id: string;
  image: string;
  description: string;
}

// Define the hotel interface
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

// Define the props interface, which expects an `item` of type `hotel`
interface HotelProps {
  item: hotel;
}

export default function Hotel({ item }: HotelProps) {
  return (
    <Pressable
    onPress={()=>{ router.push({pathname:'/hotel', params:{
      id:item.id,
      name:item.name,
      address: item.adress,
      smalladress : item.smalladress,
      cuisines: item.cuisines,
      aggregate_rating: item.aggregate_rating,
    }})}} 
    style={{marginHorizontal:6, marginVertical:12, borderRadius:20, backgroundColor:"White"}}>
      <Image style={{width:'100%', aspectRatio:6/4, borderTopLeftRadius:6,borderTopRightRadius:6 }} source={{uri:item?.featured_image}}/>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <View style={{}}>
            <Text style={{paddingHorizontal:10, marginTop:10, fontSize:16, fontWeight:"600"}}>{item?.cuisines}</Text>
            <Text style={{paddingHorizontal:10, marginTop:3, fontSize:15, fontWeight:"500", color:"grey"}}>s</Text>
            <Text style={{paddingHorizontal:10, marginTop:10, fontSize:14, fontWeight:"600", color:"#505050"}}>{item?.time}</Text>
            </View>
          <View style={{flexDirection:"row", alignItems:"center", borderRadius:4, paddingHorizontal:6, backgroundColor:'#006A4E', paddingVertical:5, marginRight:10, gap:4}}>
            <Text style={{textAlign:"center",color:"white"}}>{item?.aggregate_rating}</Text>
            <AntDesign name="staro" size={24} color="white" />
        </View>
      </View>
      <View style={{borderWidth:0.5,borderColor:'#C8C8C8', marginHorizontal:10, marginVertical:4}}/>
        <View style={{flexDirection:"row", gap:4, alignItems:"center", marginHorizontal:8, marginVertical:5}}>
        <FontAwesome5 name="percentage" size={24} color="#1F75FE" />
        <Text style={{marginLeft:2, color:"1F75FE", fontWeight:"500"}}>20% off upto Rs 100</Text>
      </View>
    </Pressable>
  );
}
