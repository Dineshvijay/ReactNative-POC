import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";

import colors from "../config/colors";

function DropdownButton(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image
        style={styles.flag}
        source={require("../assets/favicon.png")}
      ></Image>
      <Text style={styles.baseText}>{"Saudi Arabia"}</Text>
      <View style={styles.dropIconContainer}>
        <Image
          style={styles.dropIcon}
          source={require("../assets/down_arrow.png")}
        ></Image>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.lightBlue,
    width: "100%",
    height: 50,
    borderRadius: 10,
  },
  flag: {
    marginLeft: 10,
    marginTop: 15,
    width: 20,
    height: 20,
  },
  baseText: {
    fontSize: 15,
    color: colors.black,
    marginLeft: 15,
    marginTop: 15,
  },
  dropIconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  dropIcon: {
    marginRight: 15,
    marginTop: 12,
    width: 25,
    height: 25,
  },
});

export default DropdownButton;
