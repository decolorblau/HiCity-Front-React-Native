import React, { useState } from "react";

import { SafeAreaView, Text, View, TextInput, StyleSheet } from "react-native";

const Register = () => {
  const initialUser = {
    name: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);

  const changeUserData = (event: any) => {
    event.persist();
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text>NOMBRE</Text>
            <TextInput
              style={styles.input}
              value={userData.name}
              placeholder="Tu nombre de usuario"
              onChange={changeUserData}
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
              onChange={changeUserData}
              testID="email"
            />
          </View>
          <View style={styles.input}>
            <Text testID="password">PASSWORD</Text>
            <TextInput
              style={styles.input}
              value={userData.password}
              placeholder="Password"
              onChange={changeUserData}
              testID="password"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {},
  input: {},
});

export default Register;
