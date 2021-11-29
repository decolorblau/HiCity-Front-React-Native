import React from "react";
import { View, Text, Button } from "react-native";

const SettingsScreen = () => {
  const onPressFunction = () => {
    alert("hola");
  };
  return (
    <View>
      <Text>Ajustes</Text>
      <Button onPress={onPressFunction} title="LogOut" color="#ffd25d" />
    </View>
  );
};

export default SettingsScreen;
