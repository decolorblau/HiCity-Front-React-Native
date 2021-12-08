import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./Logout.styles";
import useUser from "../../hooks/useUser";
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

export default Logout;
