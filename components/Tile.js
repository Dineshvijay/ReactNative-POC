import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";

import colors from "../config/colors";

function Tile(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.3}
      onPress={props.onPress}
    >
      <Image style={styles.icon} source={props.data.icon}></Image>
      <Text style={styles.title}>{props.data.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    flex: 1 / 3,
    justifyContent: "center",
    backgroundColor: colors.tile,
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  icon: {
    alignSelf: "center",
    width: 45,
    height: 45,
  },
  title: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Tile;
