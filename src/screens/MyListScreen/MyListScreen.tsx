import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./MyListScreen.styles";

const MyListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>MI LISTA</Text>
        <Text style={styles.label}>UNDER CONSTRUCTION</Text>
        <Text style={styles.input}>Disponible en la versión: 2.0.0</Text>
        <View style={styles.line}></View>
      </View>
    </SafeAreaView>
  );
};

export default MyListScreen;
