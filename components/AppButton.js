import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

const showLoginScreen = () => {
  const navigation = useNavigation();
  navigation.navigate("Login");
};

function AppButton(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate(props.screen)}
      style={[styles.container, props.containerStyle]}
      activeOpacity={0.9}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: colors.blue,
    width: "100%",
    height: 60,
    alignItems: "center",
  },
  title: {
    paddingTop: 16,
    color: colors.white,
    fontSize: 20,
  },
});
