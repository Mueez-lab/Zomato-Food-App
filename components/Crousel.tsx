import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { enableLayoutAnimations } from 'react-native-reanimated';

enableLayoutAnimations(false); // Disables layout warnings

const { width: screenWidth } = Dimensions.get('window');

const images: string[] = [
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
];

const ImageCarousel = () => {
  return (
    <View style={{marginVertical:10}}>
      <Carousel<string> // Specify the type of the data (string array)
        width={screenWidth}
        height={200}
        data={images}
        renderItem={({ item }: { item: string }) => ( // Explicitly type `item` as a string
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
          </View>
        )}
        autoPlay // Enables auto-play
        autoPlayInterval={1000} // Set interval to 1 second (1000 ms)
        loop // Enables infinite looping
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: screenWidth,
    height: 200,
    padding:10,
    borderRadius:10,
  },
});

export default ImageCarousel;
