import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";
import { GoInScreenNavigationProp } from "../../types/navigation.types";
import { useNavigation } from "@react-navigation/core";
import RoutesEnum from "../../navigation/routes";

const GoinScreen = () => {
  const navigation = useNavigation<GoInScreenNavigationProp>();

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
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RoutesEnum.register)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>REGISTRARSE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RoutesEnum.login)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    backgroundColor: colors.white,
  },
  container: {
    alignItems: "center",
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
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    borderRadius: 90,
    backgroundColor: colors.yellow,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.textButton,
    fontWeight: "600",
  },
});

export default GoinScreen;
