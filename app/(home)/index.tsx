import { View, Text, Alert, ScrollView, Pressable, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Crousel from '../../components/Crousel';
import Categories from '@/components/Categories';
import Recomended from '@/components/Recomended';
import Items from '@/components/Items';

export default function Index() {
    const [locationEnable, setLocationEnable] = useState(false);
    const [currentAddress, setCurrentAddress] = useState("fetching location...");

    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);

    const CheckIfLocationEnabled = async () => {
        let enable = await Location.hasServicesEnabledAsync();
        if (!enable) {
            Alert.alert(
                "Location is disabled",
                "Please enable your location to continue",
                [{ text: "OK" }],
                { cancelable: false }
            );
        } else {
            setLocationEnable(true);
        }
    };

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                "Permission not granted",
                "Allow the app to use location services",
                [{ text: "OK" }],
                { cancelable: false }
            );
            return;
        }
        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
        });
        const { latitude, longitude } = location.coords;

        let response = await LocationGeocoding.reverseGeocodeAsync({
            latitude,
            longitude
        });

        if (response.length > 0) {
            const { country, subregion, city } = response[0];
            let address = `${country}, ${city},  ${subregion}`;
            setCurrentAddress(address);
        }

        console.log("Current address:", currentAddress);
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: 10 }}>
                <EvilIcons name="location" size={24} color="#E52850" />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To</Text>
                    <Text style={{ color: "grey", fontSize: 16, marginTop: 3 }}>{currentAddress}</Text>
                </View>
                <Pressable style={{ backgroundColor: "#6CB4EE", width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                    <Text>S</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: 1, borderColor: "#C0C0C0", paddingVertical: 8, paddingHorizontal: 10, borderRadius: 11, marginTop: 10, marginHorizontal: 10 }}>
                <TextInput placeholder='Search for Food, Hotel' />
                <Fontisto name="search" size={24} color="#E52B50" />
            </View>
            <Crousel />
            <Categories/>
            <Recomended/>
            <Items/>
        </ScrollView>
    );
}
