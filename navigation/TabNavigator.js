import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

import { COLORS, SIZES } from "../constants";

import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.navigator,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#08eef7', '#fdf22d']}
            end={{ x: 0.1, y: 0.75 }}
            style={{
              borderTopLeftRadius: SIZES.large,
              borderTopRightRadius: SIZES.large,
              height: 100
            }}
          />
        ),
      }}
      initialRouteName="Main"
    >
      <Tab.Screen name="Main" component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
            <Icon name={focused ? "home" : "home-outline"} type='material-community' color={COLORS.gray} size={40} />
          )}
        }}
      />
      <Tab.Screen name="Bookmark" component={Notifications} 
        options={{
          tabBarIcon: ({focused}) => {
            return (
            <Icon name={focused ? "bookmark-multiple" : "bookmark-multiple-outline"} type='material-community' color={COLORS.gray} size={30} />
          )}
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} 
        options={{
          tabBarIcon: ({focused}) => {
            return (
            <Icon name={focused ? "notifications" : "notifications-outline"} type='ionicon' color={COLORS.gray} size={30} />
          )}
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({focused}) => {
            return (
            <Icon name={focused ? "user" : "user-o"} type='font-awesome' color={COLORS.gray} size={30} />
          )}
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  navigator: {
    borderTopLeftRadius: SIZES.large,
    borderTopRightRadius: SIZES.large
  }
});