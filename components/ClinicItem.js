import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";

import Card from "./Card";
function ClinicItem(props) {
  return (
    <Card style={styles.card}>
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.container}>
          <Image style={styles.icon} source={props.content.icon} />
          <Text numberOfLines={3} style={styles.title}>
            {props.content.title}
          </Text>
          <Image
            style={styles.detailIcon}
            source={require("../assets/detail_closure.png")}
          />
        </View>
        <View style={styles.subTitleContainer}>
          <Text numberOfLines={2} style={styles.subTitle}>
            {props.content.subTitle}
          </Text>
          <Text style={styles.detailText}>{props.content.detailText}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    height: 130,
  },
  container: {
    marginTop: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    marginTop: 5,
    width: 20,
    height: 20,
    alignSelf: "flex-start",
  },
  title: {
    paddingLeft: 15,
    paddingRight: 10,
    flex: 0.93,
    fontSize: 20,
    fontWeight: "600",
  },
  detailIcon: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  subTitleContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  subTitle: {
    flex: 0.95,
    fontSize: 16,
    color: colors.medium,
  },
  detailText: {
    fontSize: 15,
    color: colors.linkButton,
    fontWeight: "bold",
    alignSelf: "baseline",
    textDecorationLine: "underline",
  },
});

export default ClinicItem;
