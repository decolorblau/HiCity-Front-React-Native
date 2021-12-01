import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

const SettingsScreen = () => {
  const onPressFunction = () => {
    alert("hola");
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Ajustes</Text>
        <Button onPress={onPressFunction} title="LogOut" color="#ffd25d" />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
