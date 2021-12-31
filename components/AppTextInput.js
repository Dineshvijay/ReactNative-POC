import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";

import colors from "../config/colors";

function AppTextInput(props) {
  return (
    <View style={[styles.inputContainer, props.style]}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.isSecure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.medium,
    height: 50,
  },
  pwdInputContainer: {
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.medium,
    height: 50,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    justifyContent: "center",
  },
  pwdInput: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.medium,
    height: 50,
  },
});
export default AppTextInput;
