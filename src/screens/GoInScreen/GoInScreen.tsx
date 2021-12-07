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
              <View style={styles.titleContainer}>
                <Text style={styles.title}>EMPIEZA LA AVENTURA</Text>
                {/*                 <Text style={styles.titleBig}>AVENTURA</Text>
                 */}
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RoutesEnum.login)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RoutesEnum.register)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>REGISTRARSE</Text>
                </TouchableOpacity>
                <View style={styles.save}>
                  <Text style={styles.textInfo}>
                    Guarda tus destinos favoritos.{"\n"}Comparte la historia de
                    tu ciudad
                  </Text>
                </View>
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
    alignItems: "center",
  },
  button: {
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 90,
    backgroundColor: colors.yellow,
    padding: 10,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.textButton,
    fontWeight: "600",
    textAlign: "center",
  },
  textInfo: {
    color: colors.lightGrey,
    fontSize: fontSize.text,
    marginTop: 35,
    textAlign: "center",
  },

  title: {
    fontSize: fontSize.h1,
    color: colors.darkGrey,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 45,
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  save: {
    width: 300,
    alignItems: "center",
  },
});

export default GoinScreen;
