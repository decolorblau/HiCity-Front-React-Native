import React from "react";
import TabNavigator from "./src/navigation/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
}
