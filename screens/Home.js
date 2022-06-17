import React, { useState } from "react";
import { View, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

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
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 0.925 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.bottomButtons}>
          <Text >Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtons}>
          <Text >Bookmark</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtons}>
          <Text >Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtons}>
          <Text >Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  footer: {
    flex: 0.075,
    left: 0,
    right: 0,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
