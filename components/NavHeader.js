import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

import colors from "../config/colors";

function NavHeader(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <Image style={styles.icon} source={require("../assets/back.png")} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    backgroundColor: colors.white,
  },
  icon: {
    marginTop: 18,
    marginLeft: 8,
    width: 30,
    height: 30,
    alignSelf: "flex-start",
  },
  titleContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    fontSize: 18,
    color: colors.black,
    fontWeight: "500",
  },
});

export default NavHeader;
