import {StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, TouchableWithoutFeedback, Keyboard} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { supabase } from "@/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(()=>{
        const checkLogin = async ()=>{
            try {
                c
                if(token)
                {
                    router.replace('/(home)')
                }
            } catch (error) {
               console.log(error);
                
            }
            checkLogin();
        }
    },[])

    async function signinWithEmail() {
        // Validate input fields
        if (!email.trim() || !password.trim()) {
            alert("Please enter both email and password.");
            return;
        }
    
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password: password.trim(),
            });
    
            if (error) {
                alert("Login failed. Please check your email and password.");
                console.error("Supabase login error:", error);
                return;
            }
    
            if (data) {
                // Save the auth token in AsyncStorage
                const token = data?.session?.access_token;
                await AsyncStorage.setItem("authToken", token ?? "");
                router.replace("/(home)");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    }

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
                    <Text style={styles.subtitle}>Welcome Back</Text>
                    <Text style={styles.description}>Log in to continue</Text>

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

                    {/* Options */}
                    <View style={styles.options}>
                        <Text style={styles.optionText}>Keep me logged in</Text>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </View>

                    {/* Login Button */}
                    <Pressable onPress={signinWithEmail} style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </Pressable>

                    {/* Register */}
                    <Pressable onPress={() => router.replace("/(authenticate)/register")}>
                        <Text style={styles.registerText}>
                            Don’t have an account?{" "}
                            <Text style={styles.registerLink}>Sign Up</Text>
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    </TouchableWithoutFeedback>
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
        marginTop:10,
        fontSize: 16,
        color: "#B3B3B3",
        textAlign: "center",
        marginBottom: 30,
    },
    inputWrapper: {
        padding:20,
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
    options: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    optionText: {
        fontSize: 14,
        color: "#B3B3B3",
    },
    forgotPassword: {
        fontSize: 14,
        color: "#00E5FF",
        fontWeight: "500",
    },
    loginButton: {
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
    loginText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
    },
    registerText: {
        fontSize: 14,
        color: "#FFFFFF",
        textAlign: "center",
    },
    registerLink: {
        color: "#00E5FF",
        fontWeight: "600",
    },
});
