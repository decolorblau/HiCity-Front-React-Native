import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyListScreen from "../screens/MyListScreen/MyListScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import CreateScreen from "../screens/CreateScreen/CreateScreen";
import { Ionicons } from "@expo/vector-icons";
import RoutesEnum from "./routes";
import { colors } from "../styles/hicity.styles";
import { StackNavigatorExplorer } from "./StackNavigator";
import useUser from "../hooks/useUser";
import GoinScreen from "../screens/GoInScreen/GoInScreen";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const {
    user: { isAuthenticated },
  } = useUser();

  return (
    <Tab.Navigator
      initialRouteName={"initial"}
      screenOptions={{
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.grey,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={RoutesEnum.stackExplorar}
        component={StackNavigatorExplorer}
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="earth-outline" size={size} color={color} />
          ),
        }}
      />
      {isAuthenticated ? (
        <>
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
            name={RoutesEnum.crear}
            component={CreateScreen}
            options={{
              title: "Create",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="add-circle-outline" size={size} color={color} />
              ),
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name={RoutesEnum.goIn}
          component={GoinScreen}
          options={{
            title: "Login",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      )}
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
    </Tab.Navigator>
  );
};

export default TabNavigator;
