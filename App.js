import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from "expo-font";

import BottomTabNavigator from "./navigation/TabNavigator";
import RootNavigator from './navigation/RootNavigator';
import store from "./redux/store";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function loadDefault() {
      AsyncStorage.getItem('user').then(serializedState => {
        const state = JSON.parse(serializedState);
        setUser(state);
      });

      await Font.loadAsync({
        InterBold: require("./assets/fonts/Inter-Bold.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
        InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
        InterLight: require("./assets/fonts/Inter-Light.ttf"),
      });
    }
    loadDefault();
  }, []);
  
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <SafeAreaProvider>
          {/* {user ? null : <RootNavigator />} */}
          <RootNavigator />
          {/* <Stack.Navigator
            screenOptions={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            initialRouteName="Login"
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="Exam" component={Exam} />
          </Stack.Navigator> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
