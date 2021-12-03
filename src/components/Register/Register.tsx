import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "../Login.styles";

const Register = () => {
  const initialUser = {
    name: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  /*   const { loginUser } = useUser();*/

  const changeUserData = (text: string, identify: string) => {
    setUserData({
      ...userData,
      [identify]: text,
    });
  };

  useEffect(() => {
    setButtonDisabled(
      userData.name === "" ||
        userData.email === "" ||
        userData.password.length < 7
    );
  }, [userData.name, userData.email, userData.password]);
  const onSubmit = () => {
    /* createSuper(userData) */
    resetForm();
  };

  const resetForm = () => {
    setUserData(initialUser);
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <View>
        <Text style={styles.title}>CREA TU CUENTA</Text>
        <View>
          <View>
            <Text style={styles.label}>NOMBRE</Text>
            <TextInput
              style={styles.input}
              value={userData.name}
              placeholder="Tu nombre de usuario"
              onChangeText={(data) => changeUserData(data, "name")}
              testID="name"
              maxLength={20}
              textContentType="name"
            />
          </View>
          <View>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.input}
              textContentType="emailAddress"
              value={userData.email}
              placeholder="Email"
              onChangeText={(data) => changeUserData(data, "email")}
              testID="email"
              accessibilityLabel="email"
              maxLength={32}
            />
          </View>
          <View>
            <Text style={styles.label} testID="password">
              CONTRASEÑA
            </Text>
            <TextInput
              style={styles.input}
              value={userData.password}
              placeholder="Contraseña "
              onChangeText={(data) => changeUserData(data, "password")}
              testID="password"
              secureTextEntry={true}
              maxLength={20}
              textContentType="password"
            />
          </View>
        </View>

        <Text style={styles.inputHelp}>Mínimo 8 carácters</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={onSubmit}
            disabled={buttonDisabled}
            style={buttonDisabled ? styles.buttonDisabled : styles.button}
          >
            <Text style={styles.buttonText}>COMENZAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
