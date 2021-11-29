import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "../screens/ExploreScreen/ExploreScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import MyListScreen from "../screens/MyListScreen/MyListScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorar" component={ExploreScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Mi Lista" component={MyListScreen} />
      <Tab.Screen name="Ajustes" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
