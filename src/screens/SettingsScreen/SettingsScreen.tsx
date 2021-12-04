import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Logout from "../../components/Logout/Logout";

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Ajustes</Text>
        <Logout />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
