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
            name: "Spice Avenue",
            image:
                "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            time: "20 - 25",
            type: "Indian Fusion",
        },
        {
            id: 5,
            name: "Urban Eats",
            image:
                "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            time: "20 - 25",
            type: "Fusion",
        },
    ];

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {recommended.map((item) => (
                <TouchableOpacity activeOpacity={0.9} key={item.id} style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.details}>
                            {item.time} mins | {item.type}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    itemContainer: {
        width: 240,
        marginRight: 15,
        borderRadius: 16,
        backgroundColor: 'brown', // Cool dark theme
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
        borderWidth: 1,
        borderColor: '#334155',
    },
    image: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    textContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: '#E2E8F0', // Light text
        textAlign: 'center',
        marginBottom: 4,
    },
    details: {
        fontSize: 14,
        color: '#94A3B8', // Subtle grey
        textAlign: 'center',
    },
});
