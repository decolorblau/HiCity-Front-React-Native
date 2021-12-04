import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import useUser from "../../hooks/useUser";
import { colors, fontSize } from "../../styles/hicity.styles";
import { removeStorage } from "../../storage/asyncStorage";
import { LOCALSTORAGE } from "@env";

const userLocal: string = LOCALSTORAGE as string;

const Logout = () => {
  const { logout } = useUser();

  const sendLogout = () => {
    removeStorage(userLocal);
    logout();
  };

  const {
    user: { isAuthenticated },
  } = useUser();

  return (
    <View>
      <TouchableOpacity onPress={sendLogout} style={styles.button}>
        {isAuthenticated ? (
          <Text style={styles.buttonText}>LOGOUT</Text>
        ) : (
          <Text style={styles.buttonText}>LOGIN</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
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

export default Logout;
