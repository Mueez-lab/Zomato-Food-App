import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "@/supabase";

export default function Logout() {
  const router = useRouter();


  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        // Optional: Invalidate the session via Supabase
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error("Supabase sign out error:", error);
          return;
        }
  
        // Clear the token from AsyncStorage
        await AsyncStorage.removeItem("authToken");
        console.log("User logged out successfully.");
  
        // Redirect to login page
        router.replace("/(authenticate)/login");
      } else {
        console.warn("No token found. User might already be logged out.");
      }
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Zomato</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.message}>Are you sure you want to logout?</Text>
          <Pressable onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
          <Pressable onPress={() => router.replace("/(home)")} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A1E",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#00E5FF",
    textShadowColor: "rgba(0, 229, 255, 0.7)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  message: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#00E5FF",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#00E5FF",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  cancelButton: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    shadowColor: "#00E5FF",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
