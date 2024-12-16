import { StyleSheet, Text, View, ScrollView, Pressable, Animated, Image } from "react-native";
import React, { useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FoodItem from "@/components/FoodItem";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import menu from '../../data/menu.json';
import { RootState } from "../../store";  

const Hotel = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.cart);  
  const [modalVisible, setModalVisible] = useState(false);
  const scrollViewRef = useRef<ScrollView | null>(null);  
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const ITEM_HEIGHT = 650;

  const scrollToCategory = (index: number) => {
    if (scrollViewRef.current) {
      const yOffset = index * ITEM_HEIGHT;
      Animated.timing(scrollAnim, {
        toValue: yOffset,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        scrollViewRef.current!.scrollTo({ y: yOffset, animated: true });
      });
    }
  };

  return (
    <>
      <ScrollView ref={scrollViewRef} style={styles.scrollView}>
         {/* Header */}
      <View style={styles.header}>
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back"
          size={24}
          color="white"
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>{params?.name || "Restaurant"}</Text>
        <Text>     </Text>
      </View>

        {/* Restaurant Info Section */}
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{params?.name}</Text>
          <Text style={styles.restaurantType}>North Indian • Fast Food • 160 for one</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{params?.aggregate_rating}</Text>
              <Ionicons name="star" size={15} color="white" />
            </View>
            <Text style={styles.ratingCount}>3.2K Ratings</Text>
          </View>
          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryText}>30 - 40 mins • 6 km | Bangalore</Text>
          </View>
        </View>

        {/* Render Food Items */}
        <View style={{paddingBottom:100}}>
        {menu?.map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
        </View>
      </ScrollView>

      {/* Menu Button */}
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={[styles.menuButton, cart?.length > 0 ? styles.cartActive : styles.cartInactive]}
      >
        <Ionicons style={styles.menuIcon} name="fast-food" size={28} color="white" />
        <Text style={styles.menuText}>MENU</Text>
      </Pressable>

      {/* Modal for Menu */}
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          {menu?.map((item) => (
            <View key={item.id} style={styles.modalItem}>
              <Text style={styles.modalItemText}>{item.name}</Text>
              <Text style={styles.modalItemCount}>{item.items?.length}</Text>
            </View>
          ))}
          <View style={styles.modalLogoContainer}>
            <Image style={styles.modalLogo} source={{ uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" }} />
          </View>
        </View>
      </Modal>

      {/* Cart Floating Button */}
      {cart?.length > 0 && (
        <View style={styles.floatingButtonContainer}>
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/cart",
                params: { name: params.name },
              })
            }
            style={styles.floatingButton}
          >
            <Text style={styles.floatingButtonTitle}>Click on it to see your cart</Text>
            <Text style={styles.floatingButtonText}>{cart.length} items added</Text>
            <Text style={styles.floatingButtonSubText}>Add items(s) worth 240 to reduce surge fee by Rs 35.</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default Hotel;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#1e1e2e", // Updated background color
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#1e1e2e", // Updated background color
    elevation: 5,
  },
  backIcon: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // Updated text color for better contrast
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  restaurantInfo: {
    padding: 20,
    backgroundColor: "#2c2c3c", // Slightly lighter background for the restaurant info section
    marginBottom: 20,
    borderRadius: 15,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff", // Updated text color
  },
  restaurantType: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "400",
    color: "#fff", // Updated text color for better contrast
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7B731",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  ratingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingCount: {
    fontSize: 14,
    fontWeight: "500",
    color: "#888", // Adjusted color to make it lighter
  },
  deliveryInfo: {
    backgroundColor: "#444", // Darker background for delivery info
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 15,
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff", // Updated text color for better contrast
  },
  categoryScroll: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  categoryButton: {
    backgroundColor: "#3b3b3b", // Slightly darker background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#444", // Updated border color
    alignItems: "center",
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    color: "#fff", // Updated text color for better contrast
    fontWeight: "500",
  },
  menuButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 80,
    backgroundColor: "#FF6F61",
    shadowColor: "#FF6F61",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  cartActive: {
    bottom: 140,
  },
  cartInactive: {
    bottom: 30,
  },
  menuIcon: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  menuText: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 5,
  },
  modalContainer: {
    backgroundColor: "#333", // Dark background for modal
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    gap: 20,
  },
  modalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  modalItemText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff", // Adjusted text color for readability
  },
  modalItemCount: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff", // Adjusted color for contrast
  },
  modalLogoContainer: {
    alignItems: "center",
  },
  modalLogo: {
    width: 80,
    height: 80,
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    padding: 15,
    zIndex: 100,
  },
  floatingButton: {
    backgroundColor: "#FF6F61",
    paddingVertical: 15,
    borderRadius: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  floatingButtonTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  floatingButtonText: {
    color: "white",
    fontWeight: "400",
    fontSize: 14,
  },
  floatingButtonSubText: {
    color: "white",
    fontSize: 12,
  },
});
