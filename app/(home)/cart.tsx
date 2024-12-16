import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart, decrementQuantity, incrementQuantity } from "../../redux/CartReducer";
import { RootState } from "../../store";
import menu from '../../data/menu.json';
import FoodItem from "@/components/FoodItem";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Instruction {
  id: string;
  name: string;
  iconName: string;
}

export default function Cart() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const [selectedInstructions, setSelectedInstructions] = useState<string[]>([]);

  const instructions: Instruction[] = [
    { id: "0", name: "Avoid Ringing", iconName: "bell" },
    { id: "1", name: "Leave at the door", iconName: "door-open" },
    { id: "2", name: "Directions to reach", iconName: "directions" },
    { id: "3", name: "Avoid Calling", iconName: "phone-alt" },
  ];

  const total = cart
    ?.map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const toggleInstruction = (id: string) => {
    setSelectedInstructions((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <ScrollView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Ionicons onPress={() => router.back()} name="arrow-back" size={24} color="white" />
          <Text style={styles.headerText}>{params?.name}</Text>
        </View>

        <View style={styles.deliveryInfo}>
          <Text style={styles.deliveryText}>
            Delivery in <Text style={styles.deliveryHighlight}>35 - 40 mins</Text>
          </Text>
        </View>

        <Text style={styles.sectionTitle}>ITEM(S) ADDED</Text>

        {cart?.map((item, index) => (
          <Pressable style={styles.cartItem} key={index}>
            <View style={styles.itemRow}>
              <Text style={styles.itemName}>{item?.name}</Text>
              <View style={styles.quantityControl}>
                <Pressable onPress={() => dispatch(decrementQuantity(item))}>
                  <Text style={styles.quantityButton}>-</Text>
                </Pressable>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <Pressable onPress={() => dispatch(incrementQuantity(item))}>
                  <Text style={styles.quantityButton}>+</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.itemPrice}>₹{item.price * item.quantity}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item?.quantity}</Text>
            </View>
          </Pressable>
        ))}

        <Text style={styles.sectionTitle}>Delivery Instructions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.instructionsContainer}>
          {instructions.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => toggleInstruction(item.id)}
              style={[
                styles.instruction,
                selectedInstructions.includes(item.id) && styles.instructionSelected,
              ]}
            >
              <FontAwesome5 name={item.iconName} size={22} color="white" />
              <Text style={styles.instructionText}>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Billing Details</Text>
        <View style={styles.billingContainer}>
          <View style={styles.billingRow}>
            <Text style={styles.billingLabel}>Item Total</Text>
            <Text style={styles.billingValue}>₹{total}</Text>
          </View>
          <View style={styles.billingRow}>
            <Text style={styles.billingLabel}>Delivery Fee</Text>
            <Text style={styles.billingValue}>₹15.00</Text>
          </View>
          <View style={styles.billingRow}>
            <Text style={styles.billingLabel}>Delivery Partner Fee</Text>
            <Text style={styles.billingValue}>₹75.00</Text>
          </View>
          <View style={[styles.billingRow, styles.totalRow]}>
            <Text style={styles.billingTotalLabel}>To Pay</Text>
            <Text style={styles.billingTotalValue}>₹{total + 90}</Text>
          </View>
        </View>
      </ScrollView>

      {total > 0 && (
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerText}>Pay Using Cash</Text>
            <Text style={styles.footerSubText}>Cash on Delivery</Text>
          </View>
          <Pressable
            onPress={() => {
              dispatch(cleanCart());
              router.replace({
                pathname: "/order",
                params: { name: params?.name },
              });
            }}
            style={styles.placeOrderButton}
          >
            <View>
              <Text style={styles.orderAmount}>₹{total + 90}</Text>
              <Text style={styles.orderTotal}>TOTAL</Text>
            </View>
            <Text style={styles.placeOrderText}>Place Order</Text>
          </Pressable>
        </View>
      )}
      <View style={{ backgroundColor: "#1e1e2e" }}>
        <View style={{ paddingBottom: 100 }}>
           {menu?.map((item) =>
           item.name === "Fries" || item.name==="Drinks" ? <FoodItem key={item.id} item={item} /> : null
          )}
        </View>
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1e1e2e", paddingTop: 20 },
  header: { flexDirection: "row", alignItems: "center", padding: 10 },
  headerText: { fontSize: 20, marginLeft: 8, fontWeight: "bold", color: "white" },
  deliveryInfo: { backgroundColor: "rgba(255, 255, 255, 0.1)", margin: 10, padding: 12, borderRadius: 10 },
  deliveryText: { fontSize: 14, color: "#ffffffb3" },
  deliveryHighlight: { fontWeight: "600", color: "#fd5c63" },
  sectionTitle: { margin: 10, fontSize: 16, fontWeight: "bold", color: "white" },
  cartItem: { backgroundColor: "rgba(255, 255, 255, 0.1)", margin: 10, padding: 12, borderRadius: 15 },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00d4ff",
  },
  itemQuantity: {
    fontSize: 14,
    color: "#ffffffb3",
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fd5c63",
    paddingHorizontal: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    marginHorizontal: 8,
  },
  instructionsContainer: {
    flexDirection: "row",
    margin: 10,
  },
  instruction: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  instructionSelected: {
    backgroundColor: "#fd5c63",
  },
  instructionText: {
    marginTop: 5,
    fontSize: 12,
    color: "white",
  },
  billingContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    margin: 10,
    borderRadius: 15,
    padding: 10,
  },
  billingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  billingLabel: {
    fontSize: 14,
    color: "#ffffffb3",
  },
  billingValue: {
    fontSize: 14,
    color: "#00d4ff",
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.2)",
    paddingTop: 10,
    marginTop: 10,
  },
  billingTotalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  billingTotalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fd5c63",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    padding: 15,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  footerSubText: {
    fontSize: 12,
    color: "#ffffffb3",
  },
  placeOrderButton: {
    backgroundColor: "#fd5c63",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 15,
    minWidth: 150,
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  orderTotal: {
    fontSize: 12,
    color: "#ffffffb3",
  },
  placeOrderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
