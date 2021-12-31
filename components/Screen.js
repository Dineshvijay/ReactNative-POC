import React from "react";
import { SafeAreaView, Platform, StyleSheet } from "react-native";

function Screen(props) {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? 50 : 30,
  },
});

export default Screen;
