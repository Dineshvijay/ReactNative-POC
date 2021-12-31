import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

function SearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder={props.placeholder} style={styles.input} />
      <Image style={styles.icon} source={require("../assets/search.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.medium,
    height: 50,
    marginTop: 10,
  },
  input: {
    flex: 0.95,
    marginLeft: 20,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    alignSelf: "center",
  },
});
export default SearchBar;
