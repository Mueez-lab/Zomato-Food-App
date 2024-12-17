  import {StyleSheet,Text,View,SafeAreaView,KeyboardAvoidingView,TextInput,Pressable,TouchableWithoutFeedback,Keyboard,} from "react-native";
  import React, { useState } from "react";
  import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
  import { useRouter } from "expo-router";
  
  const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView behavior="padding" style={styles.content}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Zomato</Text>
            </View>
  
            {/* Form */}
            <View style={styles.form}>
              <Text style={styles.subtitle}>Create an Account</Text>
              <Text style={styles.description}>Sign up to get started</Text>
  
              {/* Name Input */}
              <View style={styles.inputWrapper}>
                <Ionicons name="person" size={24} color="#FFFFFF" style={styles.icon} />
                <TextInput
                  value={name}
                  onChangeText={setName}
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#aaa"
                />
              </View>
  
              {/* Email Input */}
              <View style={styles.inputWrapper}>
                <MaterialIcons name="email" size={24} color="#FFFFFF" style={styles.icon} />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                  placeholder="Email Address"
                  placeholderTextColor="#aaa"
                  keyboardType="email-address"
                />
              </View>
  
              {/* Password Input */}
              <View style={styles.inputWrapper}>
                <AntDesign name="lock1" size={24} color="#FFFFFF" style={styles.icon} />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#aaa"
                  secureTextEntry
                />
              </View>
  
              {/* Register Button */}
              <Pressable style={styles.registerButton}>
                <Text style={styles.registerText}>Sign Up</Text>
              </Pressable>
  
              {/* Sign In Link */}
              <Pressable onPress={() => router.replace("/(authenticate)/login")}>
                <Text style={styles.signInText}>
                  Already have an account? <Text style={styles.signInLink}>Log In</Text>
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  };
  
  export default Register;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0A0A1E",
    },
    content: {
      flex: 1,
      justifyContent: "center",
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
    form: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 20,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
    },
    subtitle: {
      fontSize: 24,
      fontWeight: "600",
      color: "#FFFFFF",
      textAlign: "center",
    },
    description: {
      marginTop: 10,
      fontSize: 16,
      color: "#B3B3B3",
      textAlign: "center",
      marginBottom: 30,
    },
    inputWrapper: {
      padding:10,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: 12,
      paddingHorizontal: 15,
      marginBottom: 20,
      shadowColor: "#00E5FF",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: "#FFFFFF",
    },
    registerButton: {
      backgroundColor: "#00E5FF",
      borderRadius: 12,
      paddingVertical: 15,
      alignItems: "center",
      marginBottom: 20,
      shadowColor: "#00E5FF",
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 10,
    },
    registerText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#FFFFFF",
    },
    signInText: {
      fontSize: 14,
      color: "#FFFFFF",
      textAlign: "center",
    },
    signInLink: {
      color: "#00E5FF",
      fontWeight: "600",
    },
  });  