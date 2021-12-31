import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CalendarStrip from "react-native-calendar-strip";

import doctors from "../data/doctors";
import Screen from "../components/Screen";
import NavHeader from "../components/NavHeader";
import colors from "../config/colors";
import SearchBar from "../components/SearchBar";
import AppointmentItem from "../components/AppointmentItem";

function AppointmentScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <NavHeader
          onPress={() => props.navigation.goBack()}
          title={"E-Clinics"}
        />
      </View>
      <View style={styles.calendarContainer}>
        <CalendarStrip
          scrollable
          style={{ height: 100, paddingBottom: 10 }}
          calendarColor={colors.white}
          calendarHeaderStyle={{ color: colors.black, fontSize: 20 }}
          dateNumberStyle={{ color: colors.medium }}
          dateNameStyle={{ color: colors.medium }}
          highlightDateNumberStyle={{ color: colors.blue }}
          highlightDateNameStyle={{ color: colors.blue }}
          disabledDateNameStyle={{ color: colors.blue }}
          disabledDateNumberStyle={{ color: colors.blue }}
          iconContainer={{ flex: 0.1 }}
        />
      </View>
      <View style={styles.separator}></View>
      <FlatList
        ListHeaderComponent={
          <SearchBar
            placeholder={"Search doctors or hospitals"}
            style={styles.searchBar}
          />
        }
        data={doctors}
        keyExtractor={(doctor) => doctor.id}
        renderItem={({ item }) => <AppointmentItem doctor={item} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  separator: {
    height: 0.4,
    backgroundColor: colors.medium,
  },
  searchBar: {
    marginLeft: 20,
    marginRight: 20,
  },
  calendarContainer: {
    height: 100,
    backgroundColor: colors.primary,
  },
});

export default AppointmentScreen;
