import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Welcome"} component={WelcomeScreen} />
      <Stack.Screen name={"Login"} component={LoginScreen} />
      <Stack.Screen name={"AppNavigator"} component={AppNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
