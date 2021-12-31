import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Children } from "react/cjs/react.production.min";

import colors from "../config/colors";

function Card(props) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignSelf: "center",
    width: "90%",
    height: 160,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 4,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: "flex-start",
  },
  baseText: {
    fontSize: 18,
    color: colors.black,
  },
  innerText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Card;
