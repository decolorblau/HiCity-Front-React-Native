import React from "react";
import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import Register from "../../components/Register/Register";
import AutoHeightImage from "react-native-auto-height-image";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <AutoHeightImage
            style={styles.image}
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
    justifyContent: "center",
  },
  form: {},
  imageContainer: {
    width: 400,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {},
});

export default LoginScreen;
