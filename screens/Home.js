import React, { useState } from "react";
import { View, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from '@rneui/themed';
import tw from 'twrnc';

import { HomeHeader, FocusedStatusBar } from "../components";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const Home = () => {
  const navigation = useNavigation();

  const handleSearch = (value) => {
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <View style={[tw`flex-1`, {backgroundColor: COLORS.secondary}]}>
        <HomeHeader onSearch={handleSearch} />
        <View style={tw`flex-1 flex-row flex-wrap p-1`}>
          <TouchableOpacity style={[tw`p-2 pb-8 pt-4 bg-gray-200 m-2 mb-3 w-40 items-center`, { borderRadius: SIZES.font, ...SHADOWS.dark, }]}
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
          <TouchableOpacity style={[tw`p-2 pb-8 pt-4 bg-gray-200 m-2 mb-3 w-40 items-center`, { borderRadius: SIZES.font, ...SHADOWS.dark, }]} 
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
          <TouchableOpacity style={[tw`p-2 pb-8 pt-4 bg-gray-200 m-2 mb-3 w-40 items-center`, { borderRadius: SIZES.font, ...SHADOWS.dark, }]}
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
        </View>
      </View>
      <View style={[tw`flex flex-row justify-between inset-x-0 bottom-0 h-12 px-10 py-2`, {backgroundColor: COLORS.background}]}>
        <TouchableOpacity>
          <Icon name="home-outline" type='material-community' color={COLORS.orange} size={30} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="star-outline" type='material-community' color={COLORS.orange} size={30} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="notifications-none" type='material' color={COLORS.orange} size={30} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="account-outline" type='material-community' color={COLORS.orange} size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
