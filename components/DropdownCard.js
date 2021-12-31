import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import Card from "./Card";
import DropdownButton from "./DropdownButton";

function DropdownCard(props) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.baseText}>
          {"Please select your "}
          <Text style={styles.innerText}>{"Country"}</Text>
        </Text>
        <Text style={styles.baseText}>{"اختر بلدك"}</Text>
        <DropdownButton />
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
});

export default DropdownCard;
