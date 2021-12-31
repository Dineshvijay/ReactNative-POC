import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookNowScreen from "../screens/BookNowScreen";
import EclinicListScreen from "../screens/EclinicListScreen";
import AppointmentScreen from "../screens/AppointmentScreen";

const Stack = createNativeStackNavigator();

function BookingNowNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookingNowScreen" component={BookNowScreen} />
      <Stack.Screen name="EclinicListScreen" component={EclinicListScreen} />
      <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
    </Stack.Navigator>
  );
}

export default BookingNowNavigator;
