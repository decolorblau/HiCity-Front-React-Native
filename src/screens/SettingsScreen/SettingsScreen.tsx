import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Logout from "../../components/Logout/Logout";
import styles from "./SettingsScreen.styles";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>AJUSTES</Text>
        <Text style={styles.label}>VERSION</Text>
        <Text style={styles.input}>1.0.0</Text>
        <View style={styles.line}></View>
        <Text style={styles.label}>IDIOMA</Text>
        <Text style={styles.input}>ES</Text>
        <View style={styles.line}></View>
        <View style={styles.buttonContainer}>
          <Logout />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
