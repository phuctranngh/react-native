import React, { useState } from "react";
import { View, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from '@rneui/themed';
import tw from 'twrnc';

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={tw`flex-1`}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
      </View>
      <View style={tw`flex flex-row justify-between inset-x-0 bottom-0 h-12 px-10 py-2`}>
        <TouchableOpacity>
          <Icon name="home-outline" type='material-community' color={COLORS.primary} size={30} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="star-outline" type='material-community' color={COLORS.primary} size={30} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="notifications-none" type='material' color={COLORS.primary} size={30} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="account-outline" type='material-community' color={COLORS.primary} size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
