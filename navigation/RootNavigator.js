import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import Splash from "../screens/Splash";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      headerShown={false}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="SignIn" component={SignIn} />
      <RootStack.Screen name="SignUp" component={SignUp} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
