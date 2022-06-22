import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

import { COLORS, FONTS, SIZES } from "../constants";

import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -10,
      justifyContent: "center",
      alignItems: "center",
    }}
    activeOpacity={0.9}
    onPress={onPress}
  >
    <View style={{
      width: 65,
      height: 65,
      borderRadius: 35,
      backgroundColor: COLORS.strongBlue,
    }}
    >
      {children}
    </View>
  </TouchableOpacity>
)

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.navigator,
        tabBarBackground: () => (
          <LinearGradient
            colors={[COLORS.lightBlue, COLORS.yellow]}
            // start={{ x: 0.1, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: 80,
              opacity: 0.7
            }}
          />
        ),
      }}
      initialRouteName="Main"
    >
      <Tab.Screen name="Search" component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="search" type='ionicon' color={focused ? COLORS.strongBlue : COLORS.gray} size={25} />
              {focused && <Text style={styles.label}>Tìm kiếm</Text>}
            </View>
          )
        }}
      />
      <Tab.Screen name="Bookmark" component={Notifications} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name={focused ? "bookmark-multiple" : "bookmark-multiple-outline"} type='material-community' color={focused ? COLORS.strongBlue : COLORS.gray} size={25} />
              {focused && <Text style={styles.label}>Dấu trang</Text>}
            </View>
          )
        }}
      />
      <Tab.Screen name="Main" component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name='home' type='material-community' color={COLORS.white} size={30} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name={focused ? "notifications" : "notifications-none"} type='material' color={focused ? COLORS.strongBlue : COLORS.gray} size={25} />
              {focused && <Text style={styles.label}>Thông báo</Text>}
            </View>
          )
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name={focused ? "account" : "account-outline"} type='material-community' color={focused ? COLORS.strongBlue : COLORS.gray} size={25} />
              {focused && <Text style={styles.label}>Tài khoản</Text>}
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  navigator: {
    elevation: 0,
  },
  label: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.base,
    color: COLORS.strongBlue,
  }
});