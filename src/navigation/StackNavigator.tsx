import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutesEnum from "./routes";
import { RootStackParamList } from "../types/navigation.types";
import DetailScreen from "../screens/DetailScreen/DetailScreen";

import MapScreen from "../screens/MapScreen/MapScreen";
import CreateScreen from "../screens/CreateScreen/CreateScreen";

export const StackNavigatorExplorer = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RoutesEnum.explorar}
    >
      <Stack.Screen name={RoutesEnum.explorar} component={MapScreen} />
      <Stack.Screen name={RoutesEnum.detalle} component={DetailScreen} />
      <Stack.Screen name={RoutesEnum.edit} component={CreateScreen} />
    </Stack.Navigator>
  );
};
