import React from "react";
import TabNavigator from "./src/navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";
import { NativeBaseProvider } from "native-base";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
