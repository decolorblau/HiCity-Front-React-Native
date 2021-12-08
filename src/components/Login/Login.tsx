import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./LoginComponent.styles";
import useUser from "../../hooks/useUser";
import { useNavigation } from "@react-navigation/core";
import RoutesEnum from "../../navigation/routes";
import { LoginScreenNavigationProp } from "../../types/navigation.types";

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const initialUser = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { login } = useUser();

  const changeUserData = (text: string, identify: string) => {
    setUserData({
      ...userData,
      [identify]: text,
    });
  };

  useEffect(() => {
    setButtonDisabled(userData.email === "" || userData.password.length < 7);
  }, [userData.email, userData.password]);

  const onSubmit = () => {
    const newUser = {
      email: userData.email.toLowerCase(),
      password: userData.password,
    };
    login(newUser);
    resetForm();
    navigation.navigate(RoutesEnum.backToMap);
  };

  const resetForm = () => {
    setUserData(initialUser);
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <View>
        <Text style={styles.title}>LOGIN</Text>
        <View>
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
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.goRegister}>
          <Text style={styles.infoText}>Aun no tengo usuario</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(RoutesEnum.register);
            }}
          >
            <Text style={styles.register}>- REGISTRARSE -</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
