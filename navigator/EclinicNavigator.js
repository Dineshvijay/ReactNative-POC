import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EclinicListScreen from "../screens/EclinicListScreen";
import AppointmentScreen from "../screens/AppointmentScreen";

const Stack = createNativeStackNavigator();

function EclinicNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"EclinicList"} component={EclinicListScreen} />
      <Stack.Screen name={"AppointmentScreen"} component={AppointmentScreen} />
    </Stack.Navigator>
  );
}

export default EclinicNavigator;
