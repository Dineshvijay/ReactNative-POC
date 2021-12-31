import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";

function BasicItem(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={props.icon}></Image>
      <View style={styles.item}>
        <AppText style={styles.title} title={props.title} />
        <AppText style={styles.subTitle} title={props.subTitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    width: 45,
    height: 45,
  },
  item: {
    marginLeft: 5,
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "300",
  },
});

export default BasicItem;
