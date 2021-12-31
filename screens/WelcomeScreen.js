import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import AppButton from "../components/AppButton";

import DropdownCard from "../components/DropdownCard";
import RadioCard from "../components/RadioCard";
import colors from "../config/colors";

const showLoginScreen = () => {
  const navigation = useNavigation();
  navigation.navigate("Login");
};

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title} lin>
          {"Welcome to Sanar health world"}
        </Text>
        <Text style={styles.subTitle}>{"مرحبا بكم في سنار"}</Text>
        <Image
          style={styles.logo}
          source={require("../assets/sanar_welcome.png")}
        />
      </View>
      <View style={styles.cardContainer}>
        <DropdownCard />
        <RadioCard />
        <AppButton
          containerStyle={styles.button}
          title={"Continue"}
          screen={"Login"}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? 50 : 0,
  },
  titleContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 20.0,
    fontWeight: "200",
  },
  subTitle: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "200",
  },
  logo: {
    marginTop: 10,
    width: "100%",
    height: 130,
    resizeMode: "stretch",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: colors.white,
  },
  button: {
    marginTop: 15,
    width: "90%",
  },
});
