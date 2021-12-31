import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Card from "./Card";
import colors from "../config/colors";
import RadioButton from "./RadioButton";

function RadioCard(props) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.baseText}>
          {"Please select your "}
          <Text style={styles.innerText}>{"language"}</Text>
        </Text>
        <Text style={styles.baseText}>{"الرجاء اختيار اللغة"}</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          title={"العربية"}
          icon={require("../assets/uncheck.png")}
        />
        <RadioButton title={"English"} icon={require("../assets/check.png")} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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
  radioButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default RadioCard;
