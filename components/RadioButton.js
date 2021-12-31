import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function RadioButton(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.button}>
        <Image style={styles.icon} source={props.icon}></Image>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <View style={styles.radioButton}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    flexDirection: "row",
    backgroundColor: colors.lightBlue,
    height: 50,
    width: 150,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 15,
    color: colors.black,
  },
  icon: {
    marginLeft: 10,
    marginTop: 15,
    width: 20,
    height: 20,
  },
});

export default RadioButton;
