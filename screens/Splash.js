import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { FocusedStatusBar } from "../components";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <LinearGradient
        colors={[COLORS.primary, COLORS.yellow]}
        start={{ x: 0.4, y: 0.3 }}
        end={{ x: 0.6, y: 0.9 }}
        style={styles.background}
      />
      <Image
        source={assets.logo}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
};

export default Splash;

const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: height,
    position: "absolute",
    left: 0,
    top: 0,
  }, 
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 90, height: 25,
  }, 
  footer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row"
  },
  textSign: {
    color: COLORS.white,
    fontWeight: FONTS.bold
  }
});