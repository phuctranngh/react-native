import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { FocusedStatusBar } from "../components";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const Profile = () => {
	const handleSearch = (value) => {
  };

	return (
		<SafeAreaView style={styles.center}>
			<FocusedStatusBar backgroundColor={COLORS.primary} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
	},
});

export default  Profile;