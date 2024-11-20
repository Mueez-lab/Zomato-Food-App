import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

// Get screen width dynamically for responsive design
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Sample image URLs
const images: string[] = [
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const ImageCarousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        width={screenWidth}
        height={screenHeight * 0.25} // Dynamic height (40% of screen height)
        data={images}
        renderItem={({ item }: { item: string }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
        autoPlay
        autoPlayInterval={3000} // Change the interval to 3 seconds
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginVertical: 10,
    backgroundColor: 'white', // Ensures a white background to avoid visual issues
    borderRadius: 10, // Smooth rounded edges
    elevation: 5, // Shadow for better visibility on Android
    overflow: 'hidden', // Keeps the content inside the rounded corners
  },
  imageContainer: {
    flex: 1, // Ensures the image takes up all available space
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: '100%', // Makes the image fill the available height
    borderRadius: 10, // Matches the rounded corners
  },
});

export default ImageCarousel;
