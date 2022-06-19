import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import { FocusedStatusBar } from "../components";
import { assets, COLORS, SIZES } from "../constants";

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <Image
        source={assets.logo}
        resizeMode="contain"
        style={styles.logo}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email."
        onChangeText={() => {}}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password."
        secureTextEntry={true}
        onChangeText={() => {}}
      />
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  logo: {
    width: 90, height: 25,
  },
 
  textInput: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginTop: SIZES.font,
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
    textAlign: 'center',
    width: "70%",
  },
 
  forgot_button: {
    color: COLORS.white,
    height: 30,
    marginTop: SIZES.font,
  },
 
  loginBtn: {
    alignItems: "center",
    backgroundColor: COLORS.orange,
    borderRadius: SIZES.font,
    height: 50,
    justifyContent: "center",
    marginTop: SIZES.font,
    width: "70%",
  },
 
  loginText: {
    color: COLORS.white,
    fontFamily: 'InterBold'
  },
});