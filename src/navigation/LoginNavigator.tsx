import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RoutesEnum from "./routes";
import { RootStackParamList } from "../types/navigation.types";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import GoInScreen from "../screens/RegisterScreen/RegisterScreen";

export const StackNavigatorLogIn = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RoutesEnum.goIn}
    >
      <Stack.Screen name={RoutesEnum.goIn} component={GoInScreen} />
      <Stack.Screen name={RoutesEnum.login} component={LoginScreen} />
      <Stack.Screen name={RoutesEnum.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
