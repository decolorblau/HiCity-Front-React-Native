import React, { useState } from "react";

import { SafeAreaView, Text, View, TextInput, StyleSheet } from "react-native";

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

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Text>NOMBRE</Text>
        <TextInput
          style={styles.input}
          value={userData.name}
          placeholder="Tu nombre de usuario"
          onChangeText={(data) => changeUserData(data, "name")}
          testID="name"
          maxLength={20}
        />
      </View>
      <View style={styles.input}>
        <Text>EMAIL</Text>
        <TextInput
          style={styles.input}
          value={userData.email}
          placeholder="Email"
          onChangeText={(data) => changeUserData(data, "email")}
          testID="email"
        />
      </View>
      <View style={styles.input}>
        <Text testID="password">PASSWORD</Text>
        <TextInput
          style={styles.input}
          value={userData.password}
          placeholder="Password"
          onChangeText={(data) => changeUserData(data, "password")}
          testID="password"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  form: {},
  input: {},
});

export default Register;
