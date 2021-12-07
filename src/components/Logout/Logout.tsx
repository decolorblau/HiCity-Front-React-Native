import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import useUser from "../../hooks/useUser";
import { colors, fontSize } from "../../styles/hicity.styles";
import { removeStorage } from "../../storage/asyncStorage";
import { LOCALSTORAGE } from "@env";
import { useNavigation } from "@react-navigation/core";
import RoutesEnum from "../../navigation/routes";
import { GoInScreenNavigationProp } from "../../types/navigation.types";

const userLocal: string = LOCALSTORAGE as string;

const Logout = () => {
  const navigation = useNavigation<GoInScreenNavigationProp>();
  const {
    user: { isAuthenticated },
    logout,
  } = useUser();

  const sendLogout = () => {
    removeStorage(userLocal);
    logout();
    navigation.navigate(RoutesEnum.explorar);
  };

  return (
    <View>
      {isAuthenticated ? (
        <TouchableOpacity onPress={sendLogout} style={styles.button}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(RoutesEnum.goIn);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Logout;
