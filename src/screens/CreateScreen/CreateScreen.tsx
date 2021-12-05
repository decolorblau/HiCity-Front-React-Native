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
  Platform,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { colors, fontSize } from "../../styles/hicity.styles";
import useLandmarks from "../../hooks/useLandmarks";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Camera } from "expo-camera";

import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/storage";
import { image } from "faker/locale/zh_TW";

const CreateScreen = () => {
  const initialLandmark = {
    /*     title: "",
    city: "",
    category: "",
    imageUrl: "",
    introduction: "",
    description: "",
    latitude: "41.48606",
    longitude: "2.20872",
    address: "", */
    title: "proba 3",
    city: "proba",
    category: "proba",
    imageUrl:
      "file:///var/mobile/Containers/Data/Application/A2410FE8-FEA9-454B-BC58-A5BA03F1D204/Library/Caches/ExponentExperienceData/%2540decolorblau%252Fhicity/ImagePicker/0EFEBD10-3C64-4FCF-9DB2-086D558DAEAD.png",
    introduction: "dsfadfdsafdsfdsfadaf",
    description: "fafdadafdafdfadfdsafdsafdsafdfdsfdsfdfdfafdfdfdsfadefevcd",
    latitude: "43.48606",
    longitude: "5.20872",
  };

  const [landmarkData, setLandmarkData] = useState(initialLandmark);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [imageSelected, setImageSelected] = useState("");

  const { createLandmark } = useLandmarks();

  const changeLandmarkData = (text: string, identify: string) => {
    setLandmarkData({
      ...landmarkData,
      [identify]: text,
    });
  };

  useEffect(() => {
    setButtonDisabled(
      landmarkData.title === "" ||
        landmarkData.city === "" ||
        landmarkData.category === null ||
        landmarkData.introduction.length < 7 ||
        landmarkData.introduction.length < 7 ||
        landmarkData.introduction.length > 121 ||
        landmarkData.description.length < 20 ||
        landmarkData.description.length > 4000
    );
  }, [
    landmarkData.title,
    landmarkData.city,
    landmarkData.category,
    landmarkData.introduction,
    landmarkData.description,
  ]);

  const generateFormData = () => {
    landmarkData.imageUrl = imageSelected;
    /*     const newLandmark = {
      title: landmarkData.title,
      city: landmarkData.city,
      category: landmarkData.category,
      imageUrl: landmarkData.imageUrl,
      introduction: landmarkData.introduction,
      description: landmarkData.introduction,
      latitude: 41.48606,
      longitude: 2.20872,
    } */
    const newLandmarkPromise = new FormData();
    newLandmarkPromise.append("title", landmarkData.title.toUpperCase());
    newLandmarkPromise.append("city", landmarkData.city.toUpperCase());
    newLandmarkPromise.append("category", landmarkData.category);
    newLandmarkPromise.append("introduction", landmarkData.introduction);
    newLandmarkPromise.append("description", landmarkData.description);
    newLandmarkPromise.append("imageUrl", landmarkData.imageUrl);
    newLandmarkPromise.append("latitude", landmarkData.latitude);
    newLandmarkPromise.append("longitude", landmarkData.longitude);
    return newLandmarkPromise;
  };

  const onSubmit = () => {
    const newLandmarkPromise = generateFormData();
    const { _parts } = newLandmarkPromise;

    const newLandmark = {
      title: _parts[0][1],
      city: _parts[1][1],
      category: _parts[2][1],
      introduction: _parts[3][1],
      description: _parts[4][1],
      imageUrl: _parts[5][1],
      latitude: +_parts[6][1],
      longitude: +_parts[7][1],
    };
    uploadImageStorage().then((response) => {
      newLandmark.imageUrl = response;
      createLandmark(newLandmark);
      resetForm();
    });
  };

  const resetForm = () => {
    setLandmarkData(initialLandmark);
  };

  const imageSelect = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Es necesario aceptar los permisos de la galeria, si los has rechazado tienes que ir ha ajustes y activarlos manualmente."
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (result.cancelled) {
        Alert.alert("Has cerrado la galeria sin seleccionar ninguna imagen");
      } else {
        setImageSelected(result.uri);
        return imageSelected;
      }
    }
  };

  const removeImage = () => {
    Alert.alert(
      "Eliminar Imagen",
      "¿Estas seguro de que quieres eliminar la imagen?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            setImageSelected("");
          },
        },
      ],
      { cancelable: false }
    );
    return imageSelected;
  };

  const uploadImageStorage = async () => {
    console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa entrooo");
    (async () => {
      console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa entrooo aquiiiiiiiiiiiiii");
      const response = await fetch(imageSelected);
      console.log(response + ":oooooooooooooooooooooooo");
      const blob = await response.blob();
      console.log(blob + ":uuuuuuuuuuuuuuuuuuuu");

      const ref = firebase.storage().child(Date.now());
      console.log(ref + ":uiiiiiiiiiiii");

      const response2 = await ref.put(blob).then(async (result) => {
        await firebase
          .storage()
          .ref(`${result.metadata.name}`)
          .getDownloadURL();
        /* .then((photoUrl: string) => {
            imageBlob.push(photoUrl);
          }); */
      });
      console.log("soc response ----------------- " + response2);
      const image = JSON.parse(response2);
      console.log("soc imageBlob: -------- " + image + "-----------");
      return image;
    })();
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
                        value={landmarkData.title}
                        placeholder="Nombre del nuevo sitio icónico"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "title")
                        }
                        testID="title"
                        maxLength={30}
                        textContentType="name"
                      />
                    </View>
                    <View>
                      <Text style={styles.label}>CIUDAD</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.city}
                        placeholder="Ciudad dónde se encuentra"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "city")
                        }
                        testID="city"
                        maxLength={30}
                        textContentType="addressCity"
                      />
                    </View>
                    <View>
                      <Text style={styles.label}>CATEGORIA</Text>
                      <Picker
                        mode="dialog"
                        selectedValue={landmarkData.category}
                        onValueChange={(data) =>
                          changeLandmarkData(data, "category")
                        }
                      >
                        <Picker.Item
                          label="Selecciona una categoria"
                          value="null"
                        />
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
                    </View>
                    <View>
                      <Text style={styles.label}>UBICACIÓN</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.address}
                        placeholder="Dirección completa"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "address")
                        }
                        testID="adress"
                        maxLength={40}
                        textContentType="fullStreetAddress"
                      />
                    </View>
                    <View>
                      <Text style={styles.label}>IMAGEN</Text>
                      <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={imageSelect}>
                          <Text>Selecciona una imagen de la galeria</Text>
                          <Text>Medidas recomendadas 450px-450px</Text>
                        </TouchableOpacity>

                        <View style={styles.viewImages}>
                          {imageSelected === "" ? (
                            <Icon
                              type="material-community"
                              name="camera"
                              color={colors.yellow}
                              containerStyle={styles.containerIcon}
                              onPress={imageSelect}
                            />
                          ) : (
                            <TouchableOpacity onPress={removeImage}>
                              <Image
                                style={styles.miniatureStyle}
                                source={{ uri: imageSelected }}
                              />
                            </TouchableOpacity>
                          )}
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.label}>INTRODUCCIÓN</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.introduction}
                        placeholder="Máximo 200 carácteres"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "introduction")
                        }
                        testID="introduction"
                        maxLength={200}
                        multiline
                      />
                    </View>
                    <View>
                      <Text style={styles.label}>DESCRIPCIÓN</Text>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.description}
                        placeholder="Describe como es el sitio y cuentanos su historia."
                        onChangeText={(data) =>
                          changeLandmarkData(data, "description")
                        }
                        testID="description"
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
    backgroundColor: colors.white,
  },
  container: {
    height: 1350,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 150,
  },

  dataContainer: {
    alignItems: "center",
    top: 70,
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
  miniatureStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.textButton,
    fontWeight: "600",
  },
  viewImages: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: colors.lightYellow,
  },
});

export default CreateScreen;
