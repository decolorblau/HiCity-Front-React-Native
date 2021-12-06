import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutesEnum from "./routes";
import { LogRootStackParamList } from "../types/navigation.types";

import GoinScreen from "../screens/GoInScreen/GoInScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import MapScreen from "../screens/MapScreen/MapScreen";

export const LogStackNavigatorExplorer = () => {
  const Stack = createNativeStackNavigator<LogRootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RoutesEnum.goIn}
    >
      <Stack.Screen name={RoutesEnum.goIn} component={GoinScreen} />
      <Stack.Screen name={RoutesEnum.login} component={LoginScreen} />
      <Stack.Screen name={RoutesEnum.register} component={RegisterScreen} />
      <Stack.Screen name={RoutesEnum.backToMap} component={MapScreen} />
    </Stack.Navigator>
  );
};
