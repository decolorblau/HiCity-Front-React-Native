import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Register from "../../components/Register/Register";
import AutoHeightImage from "react-native-auto-height-image";
import styles from "../LoginScreen/LoginScreen.styles";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <ScrollView style={styles.containerMain}>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
