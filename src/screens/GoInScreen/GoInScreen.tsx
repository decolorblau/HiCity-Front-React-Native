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
import styles from "./GoInScreen.styles";
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

export default GoinScreen;
