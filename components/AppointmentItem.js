import React from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import colors from "../config/colors";

import Card from "./Card";
import timeSlot from "../data/timeSlot";
import TextItem from "./TextItem";
import SearchBar from "./SearchBar";

function AppointmentItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={styles.userPic}
          source={require("../assets/doctor.png")}
        />
        <View style={styles.userPrimary}>
          <Text style={styles.name}>{props.doctor.name}</Text>
          <Text style={styles.description}>{props.doctor.qualification}</Text>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.secondContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.expContainer}>
            <Text style={styles.label}>
              Experience:
              <Text style={styles.text}>{props.doctor.experience}</Text>
            </Text>
            <Text style={styles.label}>
              Telemedicine:
              <Text style={styles.text}>{props.doctor.telemedicine}</Text>
            </Text>
          </View>
          <View style={styles.feesContainer}>
            <Text style={styles.price}>{props.doctor.fees}</Text>
          </View>
        </View>
        <View style={styles.timeSlotContainer}>
          <FlatList
            keyExtractor={(slot) => slot.id}
            data={timeSlot}
            horizontal
            renderItem={({ item }) => <TextItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}
/*
 <FlatList
            numColumns={timeSlot.length}
            keyExtractor={(slot) => slot.id}
            data={timeSlot}
            renderItem={({ item }) => <TextItem item={item} />}
          />
*/
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: colors.medium,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    height: 250,
  },
  userContainer: {
    flexDirection: "row",
    margin: 15,
    height: 80,
    backgroundColor: colors.white,
  },
  userPic: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
  },
  userPrimary: {
    flex: 1,
    flexDirection: "column",
    height: 80,
    marginLeft: 10,
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
  },
  separator: {
    height: 0.4,
    backgroundColor: colors.medium,
  },
  secondContainer: {
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    height: 120,
    backgroundColor: colors.white,
  },
  expContainer: {
    flex: 0.7,
    flexDirection: "column",
    backgroundColor: colors.white,
    height: 60,
  },
  feesContainer: {
    flex: 0.3,
    flexDirection: "row",
    height: 60,
    backgroundColor: colors.white,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  timeSlotContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  price: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.blue,
  },
  label: {
    fontSize: 18,
    color: colors.medium,
  },
  text: {
    fontSize: 18,
    color: colors.black,
  },
});

export default AppointmentItem;
