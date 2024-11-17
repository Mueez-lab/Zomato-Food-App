import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Recommended() {
    interface Recommended {
        id: number;
        name: string;
        image: string;
        time: string;
        type: string;
    }

    const recommended: Recommended[] = [
        {
            id: 1,
            name: "Nandhana Palace",
            image:
                "https://b.zmtcdn.com/data/pictures/chains/3/50713/81d0735ce259a6bf800e16bb54cb9e5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            time: "35 - 45",
            type: "Andhra",
        },
        {
            id: 2,
            name: "GFC Biriyani",
            image:
                "https://b.zmtcdn.com/data/pictures/0/20844770/f9582144619b80d30566f497a02e2c8d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            time: "10 - 35",
            type: "North Indian",
        },
        {
            id: 3,
            name: "Happiness Dhaba",
            image:
                "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            time: "20 - 25",
            type: "North Indian",
        },
        {
            id: 4,
            name: "Happiness Dhaba",
            image:
                "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            time: "20 - 25",
            type: "North Indian",
        },
        {
            id: 5,
            name: "Happiness Dhaba",
            image:
                "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            time: "20 - 25",
            type: "North Indian",
        },
    ];

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {recommended.map((item) => (
                <TouchableOpacity activeOpacity={0.8} key={item.id} style={styles.itemContainer}>
                    <View style={{flex:1}}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    </View>
                    <View style={{flex:1, padding:10, justifyContent:"center", alignItems:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.details}>{item.time} mins | {item.type}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    itemContainer: {
        flex:1,
        flexDirection:"row",
        width: 280,
        marginRight: 15,
        borderRadius:10,
        backgroundColor:"#fff"
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
    },
    details: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
    },
});
