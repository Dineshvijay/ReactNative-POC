import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ClinicItem from "../components/ClinicItem";
import NavHeader from "../components/NavHeader";

import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import clinics from "../data/clinics";

function EclinicListScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <NavHeader
          onPress={() => props.navigation.goBack()}
          title={"E-Clinics"}
        />
      </View>
      <FlatList
        data={clinics}
        keyExtractor={(source) => source.id}
        ListHeaderComponent={
          <SearchBar
            placeholder={"Search Speciality, Symptoms"}
            style={styles.searchBar}
          />
        }
        renderItem={({ item }) => (
          <ClinicItem
            content={item}
            onPress={() => props.navigation.navigate("AppointmentScreen")}
          />
        )}
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
  searchBar: {
    marginLeft: 20,
    marginRight: 20,
  },
});

export default EclinicListScreen;
