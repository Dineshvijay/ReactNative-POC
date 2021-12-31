import React from "react";
import { StyleSheet, View, Image, Platform, FlatList } from "react-native";

import AppText from "../components/AppText";
import BasicItem from "../components/BasicItem";
import Tile from "../components/Tile";
import Screen from "../components/Screen";
import colors from "../config/colors";
import EclinicNavigator from "../navigator/EclinicNavigator";

const dataSource = [
  {
    id: "0",
    icon: require("../assets/heart.png"),
    title: "Telemedicine",
  },
  {
    id: "1",
    icon: require("../assets/heart.png"),
    title: "Lab Technician",
  },
  {
    id: "2",
    icon: require("../assets/heart.png"),
    title: "Covid-19 PCR",
  },
  {
    id: "3",
    icon: require("../assets/heart.png"),
    title: "Nurse",
  },
  {
    id: "4",
    icon: require("../assets/heart.png"),
    title: "Psychiatrist",
  },
  {
    id: "5",
    icon: require("../assets/heart.png"),
    title: "Home visit Doctor",
  },
  {
    id: "6",
    icon: require("../assets/heart.png"),
    title: "Telemedicine",
  },
  {
    id: "7",
    icon: require("../assets/heart.png"),
    title: "Vaccination",
  },
  {
    id: "8",
    icon: require("../assets/heart.png"),
    title: "Radiology",
  },
  {
    id: "9",
    icon: require("../assets/heart.png"),
    title: "Vitamin IV Drips",
  },
  {
    id: "10",
    icon: require("../assets/heart.png"),
    title: "Hermodialysis",
  },
];

function BookNowScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.topContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/sanar_logo.png")}
        ></Image>
        <AppText style={styles.title} title={"Sanar"} />
      </View>
      <View style={styles.headerContainer}>
        <BasicItem
          icon={require("../assets/heart.png")}
          title={"Get the best health-care service"}
          subTitle={"We accept Medigulf insurance for telemedicine"}
        />
      </View>
      <View style={styles.tileContainer}>
        <FlatList
          numColumns={3}
          data={dataSource}
          keyExtractor={(source) => source.id}
          renderItem={({ item }) => (
            <Tile
              data={item}
              onPress={() => props.navigation.navigate("EclinicListScreen")}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Platform.OS == "ios" ? 54 : 0,
  },
  topContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
  },
  logo: {
    marginTop: Platform.OS == "android" ? 4 : 0,
    width: Platform.OS == "android" ? 33 : 35,
    height: Platform.OS == "android" ? 33 : 35,
  },
  title: {
    paddingLeft: 10,
    color: colors.blue,
    fontSize: 30,
  },
  headerContainer: {
    marginTop: 20,
    paddingLeft: 20,
  },
  tileContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  column: {
    flex: 1 / 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default BookNowScreen;
