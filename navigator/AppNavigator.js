import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MySanarScreen from "../screens/MySanarScreen";
import MoreScreen from "../screens/MoreScreen";
import MySanarButton from "./MySanarButton";
import BookingNowNavigator from "./BookingNowNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="stethoscope" size={size} color={color} />
          ),
        }}
        name={"BookingNow"}
        component={BookingNowNavigator}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <MySanarButton onPress={() => navigation.navigate("MySanar")} />
          ),
          tabBarIcon: ({ size, color }) => (
            <Icon name="doctor" size={size} color={color} />
          ),
        })}
        name={"MySanar"}
        component={MySanarScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon
              name="dots-horizontal-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
        name={"More"}
        component={MoreScreen}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
