import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

import colors from "../config/colors";

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <AppText title={"Welcome Back"} />
      </View>
      <View style={styles.mobileNumContainer}>
        <Text style={styles.title}>{"Mobile Number"}</Text>
        <View style={styles.mobileNumTextContainer}>
          <TouchableOpacity style={styles.countryCode}>
            <Text style={styles.countryCodeText}>{"+966"}</Text>
            <Image
              style={styles.icon}
              source={require("../assets/down_arrow.png")}
            ></Image>
          </TouchableOpacity>
          <AppTextInput
            placeholder={"5XXXXXXXX"}
            isSecure={false}
            style={styles.inputContainer}
          />
        </View>
      </View>
      <View style={styles.pwdTextContainer}>
        <Text style={styles.title}>{"Password"}</Text>
        <AppTextInput isSecure={true} />
        <TouchableOpacity style={styles.forgotpwdButton} activeOpacity={0.7}>
          <Text style={styles.forgotpwd}>{"Forget Password?"}</Text>
        </TouchableOpacity>
        <AppButton
          title={"Sign In"}
          screen={"AppNavigator"}
          navigation={navigation}
        />
      </View>
      <TouchableOpacity style={styles.signup}>
        <Text style={styles.title}>
          {"Don't have an account? "}
          <Text style={styles.forgotpwd}>{"Sign Up"}</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 20,
    backgroundColor: colors.white,
    marginTop: Platform.OS == "android" ? 50 : 30,
  },
  titleContainer: {
    width: 160,
  },
  mobileNumContainer: {
    marginTop: 40,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 15,
    color: colors.medium,
    marginVertical: 10,
  },
  mobileNumTextContainer: {
    flex: 1,
    flexDirection: "row",
  },
  pwdTextContainer: {
    flex: 1,
    marginVertical: 60,
    flexDirection: "column",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
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
  countryCode: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.medium,
    height: 50,
    width: 80,
  },
  countryCodeText: {
    fontSize: 16,
    color: colors.black,
  },
  forgotpwd: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "bold",
  },
  forgotpwdButton: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  signup: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
});
export default LoginScreen;
