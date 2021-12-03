import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "../screens/ExploreScreen/ExploreScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import MyListScreen from "../screens/MyListScreen/MyListScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import CreateScreen from "../screens/CreateScreen/CreateScreen";
import { Ionicons } from "@expo/vector-icons";
import RoutesEnum from "./routes";
import { colors } from "../styles/hicity.styles";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={RoutesEnum.explorar}
      screenOptions={{
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.grey,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={RoutesEnum.explorar}
        component={ExploreScreen}
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="earth-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RoutesEnum.login}
        component={LoginScreen}
        options={{
          title: "Login",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RoutesEnum.miLista}
        component={MyListScreen}
        options={{
          title: "Mi Lista",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RoutesEnum.ajustes}
        component={SettingsScreen}
        options={{
          title: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RoutesEnum.crear}
        component={CreateScreen}
        options={{
          title: "Create",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
