import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import colors from "../config/colors";
function AppText(props) {
  return <Text style={[styles.title, props.style]}>{props.title}</Text>;
}

const styles = StyleSheet.create({
  title: { fontSize: 35.0, fontWeight: "bold", color: colors.black },
});

export default AppText;
