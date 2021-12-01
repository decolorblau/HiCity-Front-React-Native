import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";

const Register = () => {
  const initialUser = {
    name: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const [isDisabled, setIsDisabled] = useState(true);

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
              // onFocus={}
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
              // onFocus={}
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
              // onFocus={}
              placeholder="Password"
              onChange={changeUserData}
              testID="password"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>

    /*    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.tittleH2}>Bienvenid@</Text>
            <View>
              <Text style={styles.text}>
                Has escogido la opción “tatuador”, a continuación deberás
                rellenar un formulario para registrarte y así poder formar parte
                de nuestra comunidad. Después de eso, podrás entrar en tu perfil
                como tatuador directamente. Esperamos que tengas una buena
                experiencia!
              </Text>
            </View>
          </View>

          <View style={styles.forms}>
            <Text style={styles.tittleH2}>Datos personales</Text>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  value={personalDataTattoArtist.name}
                  // onFocus={}
                  placeholder="Nombre *"
                  onChange={onChangeDataPersonal}
                  testID="name"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  value={personalDataTattoArtist.surname1}
                  onChange={onChangeDataPersonal}
                  // onFocus={}
                  placeholder="Primer apellido *"
                  testID="surname1"
                  maxLength={20}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  value={personalDataTattoArtist.surname2}
                  onChange={onChangeDataPersonal}
                  // onFocus={}
                  placeholder="Segundo apellido *"
                  testID="surname2"
                  maxLength={20}
                />
              </View>
            </View>
          </View>

          <View style={styles.forms}>
            <Text style={styles.tittleH2}>Datos de usuario</Text>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  value={userDataTattoArtist.userName}
                  // onFocus={}
                  placeholder="Nombre de usuario *"
                  onChange={onChangeDataUser}
                  testID="userName"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  value={userDataTattoArtist.password}
                  onChange={onChangeDataUser}
                  // onFocus={}
                  placeholder="Contraseña *"
                  testID="password"
                  secureTextEntry={true}
                  maxLength={20}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  value={userDataTattoArtist.repeatPassword}
                  onChange={onChangeDataUser}
                  // onFocus={}
                  placeholder="Repetir la contraseña *"
                  secureTextEntry={true}
                  testID="repeatPassword"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  keyboardType="email-address"
                  style={styles.input}
                  value={userDataTattoArtist.email}
                  onChange={onChangeDataUser}
                  // onFocus={}
                  placeholder="Email *"
                  testID="email"
                  maxLength={20}
                />
              </View>
            </View>
          </View>

          <View style={styles.forms}>
            <Text style={styles.tittleH2}>Datos profesionales</Text>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  value={professionalDataTattooArtist.studioName}
                  // onFocus={}
                  placeholder="Nombre Estudio (opcional)"
                  onChange={onChangeDataProfessional}
                  testID="studioName"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  value={professionalDataTattooArtist.professionalName}
                  // onFocus={}
                  placeholder="Nombre profesional *"
                  onChange={onChangeDataProfessional}
                  testID="professionalName"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  value={professionalDataTattooArtist.phone}
                  // onFocus={}
                  placeholder="Telefono de contacto *"
                  onChange={onChangeDataProfessional}
                  testID="phone"
                  maxLength={20}
                />
              </View>

              <View>
                <TextInput
                  keyboardType="email-address"
                  style={styles.input}
                  value={professionalDataTattooArtist.contactEmail}
                  // onFocus={}
                  placeholder="Email de contacto *"
                  onChange={onChangeDataProfessional}
                  testID="contactEmail"
                  maxLength={20}
                />
              </View>
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={professionalDataTattooArtist.openingHours}
                // onFocus={}
                placeholder="Horario *"
                onChange={onChangeDataProfessional}
                testID="openingHours"
                maxLength={20}
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={professionalDataTattooArtist.direction}
                // onFocus={}
                placeholder="Dirección *"
                onChange={onChangeDataProfessional}
                testID="direction"
                maxLength={20}
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={professionalDataTattooArtist.tattooStyles}
                // onFocus={}
                placeholder="Estilos *"
                onChange={onChangeDataProfessional}
                testID="tattooStyles"
                maxLength={20}
              />
            </View>
          </View>

          <View>
            <CheckBox
              disabled={false}
              value={professionalDataTattooArtist.colaboration}
              onValueChange={selectCheckBox}
              boxType="square"
              testID="colaboration"
              onTintColor={color.darkBrown}
              onCheckColor={color.darkBrown}
              tintColor={color.black}
            />
            <Text style={styles.text}>
              Colaboración con otros estudios / tatuadores?
            </Text>

            <GeneralButton
              textButton="REGISTRARME COMO TATUADOR"
              functionOnPress={onSubmit}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView> */
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Register;
