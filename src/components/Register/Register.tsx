import { Center } from "native-base";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";

const Register = () => {
  const initialUser = {
    name: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);

  const changeUserData = (text: string, identify: string) => {
    setUserData({
      ...userData,
      [identify]: text,
    });
  };
  const onSubmit = () => {};

  return (
    <View>
      <Text style={styles.title}>CREA TU CUENTA</Text>
      <View>
        <Text style={styles.label}>NOMBRE</Text>
        <TextInput
          style={styles.input}
          value={userData.name}
          placeholder="Tu nombre de usuario"
          onChangeText={(data) => changeUserData(data, "name")}
          testID="name"
          maxLength={20}
        />
      </View>
      <View>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          value={userData.email}
          placeholder="Email"
          onChangeText={(data) => changeUserData(data, "email")}
          testID="email"
        />
      </View>
      <View>
        <Text style={styles.label} testID="password">
          CONTRASEÑA
        </Text>
        <TextInput
          style={styles.input}
          value={userData.password}
          placeholder="Contraseña"
          onChangeText={(data) => changeUserData(data, "password")}
          testID="password"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: colors.white,
    borderBottomColor: colors.grey,
    fontSize: fontSize.text,
    marginTop: 5,
    paddingHorizontal: 0,
  },
  label: {
    fontSize: fontSize.text,
    marginTop: 15,
  },
  title: {
    fontSize: fontSize.h1,
    color: colors.yellow,
    fontWeight: "600",
    marginBottom: 5,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
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

export default Register;
