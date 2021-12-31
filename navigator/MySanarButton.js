import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

function MySanarButton(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <View style={styles.iconContainer}>
        <Icon name="doctor" size={40} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.blue,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    bottom: 30,
  },
  iconContainer: {
    marginTop: 8,
  },
});

export default MySanarButton;
