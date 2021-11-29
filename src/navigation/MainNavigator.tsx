import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "../screens/ExploreScreen/ExploreScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import MyListScreen from "../screens/MyListScreen/MyListScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Explorar" component={ExploreScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Mi Lista" component={MyListScreen} />
        <Tab.Screen name="Ajustes" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
