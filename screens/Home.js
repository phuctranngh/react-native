import React, { useState } from "react";
import { View, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'twrnc';

import { HomeHeader, FocusedStatusBar } from "../components";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const Home = () => {
  const navigation = useNavigation();

  const handleSearch = (value) => {
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <HomeHeader onSearch={handleSearch} />
        
      <View style={[tw`flex-1`, {backgroundColor: COLORS.white}]}>
        <ScrollView contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 4
          }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.categoryButton}
          >
            <View>
              <Image
                source={assets.inspiration}
                resizeMode="contain"
                style={{ width: 120, height: 120 }}
                />
              <Text style={styles.categoryText}>Bài học</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton} 
            onPress={() => {navigation.navigate("Exam")}}
          >
            <View>
              <Image
                source={assets.exam}
                resizeMode="contain"
                style={{ width: 120, height: 120 }}
                />
              <Text style={styles.categoryText}>Làm bài thi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}
          >
            <View>
              <Image
                source={assets.certificate}
                resizeMode="contain"
                style={{ width: 120, height: 120 }}
                />
              <Text style={styles.categoryText}>Chứng chỉ</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  categoryButton: { 
      backgroundColor: COLORS.transBlue, 
      borderRadius: SIZES.font, 
      margin: 12,
      // marginBottom: 12,
      padding: 14,
      width: 152,
      height: 200,
      ...SHADOWS.dark, 
  },
  categoryText: {
    color: COLORS.strongBlue,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large, 
    marginTop: 20, 
    textAlign: "center"
  }
});
