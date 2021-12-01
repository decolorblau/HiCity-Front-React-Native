import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Register from "../../components/Register/Register";
import AutoHeightImage from "react-native-auto-height-image";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <View style={styles.imageContainer}>
          <AutoHeightImage
            width={220}
            source={require("../../assets/logo-hicity.png")}
          />
        </View>
        <View style={styles.form}>
          <Register />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
  },
  dataContainer: {
    flex: 1,
    alignItems: "center",
    top: 70,
  },
  imageContainer: {
    width: 400,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  form: { marginTop: 50 },
});

export default LoginScreen;
