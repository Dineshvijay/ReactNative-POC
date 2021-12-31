import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
function TextItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.item.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 35,
    borderWidth: 2.0,
    borderColor: colors.blue,
    borderRadius: 5.0,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.blue,
  },
});
export default TextItem;
