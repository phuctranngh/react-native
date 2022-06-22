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
      <FocusedStatusBar backgroundColor='#08eef7' />
        <HomeHeader onSearch={handleSearch} />
        
      <View style={[tw`flex-1`, {backgroundColor: COLORS.white}]}>
        <ScrollView contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 4
        }}>
          <TouchableOpacity style={[tw`p-2 pb-8 pt-4 bg-blue-200 m-2 mb-3 w-40 items-center`, { borderRadius: SIZES.font, ...SHADOWS.dark, }]}
          >
            <View>
              <Image
                source={assets.inspiration}
                resizeMode="contain"
                style={{ width: 120, height: 120 }}
                />
              <Text style={[tw`mt-2 text-base text-center`, {fontFamily: FONTS.semiBold}]}>Bài học</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[tw`p-2 pb-8 pt-4 bg-blue-200 m-2 mb-3 w-40 items-center`, { borderRadius: SIZES.font, ...SHADOWS.dark, }]} 
            onPress={() => {navigation.navigate("Exam")}}
          >
            <View>
              <Image
                source={assets.exam}
                resizeMode="contain"
                style={{ width: 120, height: 120 }}
                />
              <Text style={[tw`mt-2 text-base text-center`, {fontFamily: FONTS.semiBold}]}>Làm bài thi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[tw`p-2 pb-8 pt-4 bg-blue-200 m-2 mb-3 w-40 items-center`, { borderRadius: SIZES.font, ...SHADOWS.dark, }]}
          >
            <View>
              <Image
                source={assets.certificate}
                resizeMode="contain"
                style={{ width: 120, height: 120 }}
                />
              <Text style={[tw`mt-2 text-base text-center`, {fontFamily: FONTS.semiBold}]}>Chứng chỉ</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
