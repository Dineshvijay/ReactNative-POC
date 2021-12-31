import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./navigator/AuthNavigator";
import NavigationTheme from "./navigator/NavigationTheme";
import AppNavigator from "./navigator/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
