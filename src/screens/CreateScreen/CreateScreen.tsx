import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import { colors, fontSize } from "../../styles/hicity.styles";

const CreateScreen = () => {
  const initialUser = {
    name: "",
    email: "",
    password: "",
  };

  const [landmarkData, setLandmarkData] = useState(initialUser);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  /*   const { loginUser } = useUser();*/

  const changeLandmarkData = (text: string, identify: string) => {
    setLandmarkData({
      ...landmarkData,
      [identify]: text,
    });
  };

  useEffect(() => {
    setButtonDisabled(
      landmarkData.name === "" ||
        landmarkData.email === "" ||
        landmarkData.password.length < 7
    );
  }, [landmarkData.name, landmarkData.email, landmarkData.password]);
  const onSubmit = () => {
    /* createSuper(landmarkData) */
    resetForm();
  };

  const resetForm = () => {
    setLandmarkData(initialUser);
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <ScrollView style={styles.containerMain}>
        <SafeAreaView style={styles.container}>
          <View style={styles.dataContainer}>
            <View style={styles.form}>
              <KeyboardAvoidingView behavior="padding" enabled={true}>
                <View>
                  <Text style={styles.title}>NUEVO</Text>
                  <Text style={styles.title}>SITIO ICÓNICO</Text>
                  <View>
                    <View>
                      <Text style={styles.label}>TÍTULO</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.name}
                        placeholder="Nombre del nuevo sitio icónico"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "name")
                        }
                        testID="name"
                        maxLength={30}
                        textContentType="name"
                      />
                    </View>
                    <View>
                      <Text style={styles.label}>CIUDAD</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.name}
                        placeholder="Ciudad dónde se encuentra"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "name")
                        }
                        testID="name"
                        maxLength={30}
                        textContentType="addressCity"
                      />
                    </View>
                    <View>
                      <Text style={styles.label}>CATEGORIA</Text>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.input}>Selecciona Categoria</Text>
                      </TouchableOpacity>
                      <Modal
                        animated
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(!modalVisible)}
                      >
                        <View style={styles.modal}></View>

                        <Picker
                          mode="dialog"
                          selectedValue={selectedCategory}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedCategory(itemValue)
                          }
                        >
                          <Picker.Item label="Barrio" value="Barrio" />
                          <Picker.Item label="Plaza" value="plaza" />
                          <Picker.Item label="Calle-Avenida" value="Calle" />
                          <Picker.Item label="Parque" value="Parque" />
                          <Picker.Item label="Comercial" value="Comercial" />
                          <Picker.Item label="Cultural" value="Cultural" />
                          <Picker.Item label="Deportivo" value="Deportivo" />
                          <Picker.Item label="Religioso" value="Religioso" />
                          <Picker.Item label="Otros" value="Otros" />
                        </Picker>
                      </Modal>
                    </View>
                    <View>
                      <Text style={styles.label}>UBICACIÓN</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.name}
                        placeholder="Dirección completa"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "name")
                        }
                        testID="name"
                        maxLength={40}
                        textContentType="fullStreetAddress"
                      />
                    </View>
                    <View>
                      <Text style={styles.label}>IMAGEN</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.name}
                        placeholder="Medidas recomendadas 450px-450px"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "name")
                        }
                        testID="name"
                        textContentType="URL"
                      />
                    </View>
                    <View>
                      <Text style={styles.label}>INTRODUCCIÓN</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.name}
                        placeholder="Máximo 200 carácteres"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "name")
                        }
                        testID="name"
                        maxLength={200}
                        textContentType="name"
                        multiline
                      />
                    </View>
                    <View>
                      <Text style={styles.label}>DESCRIPCIÓN</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.name}
                        placeholder="Describe como es el sitio y cuentanos su historia."
                        onChangeText={(data) =>
                          changeLandmarkData(data, "name")
                        }
                        testID="name"
                        textContentType="name"
                        multiline
                      />
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={onSubmit}
                      disabled={buttonDisabled}
                      style={
                        buttonDisabled ? styles.buttonDisabled : styles.button
                      }
                    >
                      <Text style={styles.buttonText}>COMENZAR</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
  },
  dataContainer: {
    flex: 1,
    alignItems: "center",
    top: 70,
  },
  imageContainer: {
    width: 400,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  form: { marginTop: 50 },
  input: {
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: colors.white,
    borderBottomColor: colors.grey,
    fontSize: fontSize.text,
    paddingHorizontal: 0,
    color: colors.grey,
  },
  label: {
    fontSize: fontSize.text,
    marginTop: 15,
    color: colors.darkGrey,
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
  buttonDisabled: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 90,
    backgroundColor: colors.lightYellow,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.textButton,
    fontWeight: "600",
  },

  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default CreateScreen;
