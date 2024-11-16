import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';

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
        <View>
            <Text>{currentAddress}</Text>
            <Text>Home Screen</Text>
        </View>
    );
}
