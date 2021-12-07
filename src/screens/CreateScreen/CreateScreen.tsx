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
  Alert,
  Modal,
  Dimensions,
  Platform,
} from "react-native";
import { Marker } from "react-native-maps";
import { Icon, Image } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { colors, fontSize } from "../../styles/hicity.styles";
import useLandmarks from "../../hooks/useLandmarks";
import { Camera } from "expo-camera";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { mapStyle } from "../MapScreen/MapScreen.styles";
import { useNavigation } from "@react-navigation/core";
import {
  EditScreenNavigationProp,
  EditScreenRouteProp,
} from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";
import ILandmark from "../../types/landmarkInterface";
import * as ImagePicker from "expo-image-picker";
import { launchImageLibrary } from "react-native-image-picker";
import { INewImage } from "../../types/componentsInterfaces";

interface ILandmarkDetailsProps {
  route?: EditScreenRouteProp;
}

const CreateScreen = ({ route }: ILandmarkDetailsProps) => {
  const navigation = useNavigation<EditScreenNavigationProp>();
  const { createLandmark, landmarks, updateLandmark } = useLandmarks();

  const initialLandmark = {
    title: "proba",
    city: "proba",
    category: "proba",
    imageUrl: "",
    introduction: "raggadjgdalgjgaf",
    description: "dagdadfjdfjdflafjdsaflafljadlfjalfdfadada",
    latitude: "45.435543",
    longitude: "3.542525",
  };

  const [error, setError] = useState("");
  const [landmarkData, setLandmarkData] = useState(initialLandmark);
  const [isEditing, setIsEditing] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [imageSelected, setImageSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [getCoordinates, setGetCoordinates] = useState(false);
  const [id, setId] = useState("");
  const [locationLandmark, setLocationLandmark] = useState({
    latitude: 41.38879,
    longitude: 2.15899,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [location, setLocation] = useState({
    latitude: 41.38879,
    longitude: 2.15899,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [imageType, setImageType] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    if (route.name === "edit") {
      const {
        params: { idLandmark },
      } = route;
      const landmark = landmarks.find(
        (landmark: ILandmark) => landmark.id === idLandmark
      );
      setLandmarkData(landmark);
      setId(idLandmark);
      setIsEditing(true);
      setGetCoordinates(true);
      setLocation({
        latitude: +landmark.latitude,
        longitude: +landmark.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } else {
      setLandmarkData(initialLandmark);
      setIsEditing(false);
      setGetCoordinates(false);
      (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setError("Permission to access location was denied");
        } else {
          const newLocation = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
          });
          setLocation({
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }
      })();
    }
  }, []);

  const confirmLocation = () => {
    setLocationLandmark(location);
    setGetCoordinates(true);
    setModalVisible(false);
  };

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
    if (!isEditing) {
      landmarkData.longitude = `${locationLandmark.longitude}`;
      landmarkData.latitude = `${locationLandmark.latitude}`;
    }

    const newLandmark = new FormData();
    newLandmark.append("title", landmarkData.title.toUpperCase());
    newLandmark.append("city", landmarkData.city.toUpperCase());
    newLandmark.append("category", landmarkData.category);
    newLandmark.append("introduction", landmarkData.introduction);
    newLandmark.append("description", landmarkData.description);
    newLandmark.append("latitude", landmarkData.latitude);
    newLandmark.append("longitude", landmarkData.longitude);
    newLandmark.append("imageUrl", {
      type: imageType,
      uri: imageSelected,
      name: imageName,
    });
    return newLandmark;
  };

  const onSubmit = () => {
    const newLandmark = generateFormData();
    {
      isEditing ? updateLandmark(newLandmark, id) : createLandmark(newLandmark);
    }
    resetForm();
    navigation.navigate(RoutesEnum.explorar);
  };

  const resetForm = () => {
    setLandmarkData(initialLandmark);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    })();
  }, []);

  const chooseFile = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImageSelected(result.uri);
        const localUri = result.uri;
        const filename: any = localUri.split("/").pop();
        setImageName(filename);
        const match = /\.(\w+)$/.exec(filename);
        const type: any = match ? `image/${match[1]}` : `image`;
        setImageType(type);
      }
    } catch (error) {
      error;
    }
  };

  /*   const chooseFile = async () => {
    const options: any = {
      title: "Select Image",
      customButtons: [
        {
          name: "customOptionKey",
          title: "Choose Photo from Custom Option",
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchImageLibrary(options, (response: any) => {
      const source = response.assets;
      console.log(respo)
      setImageSelected(source[0]);
    });
  }; */
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

  /*   const uploadImageStorage = async () => {
    (async () => {
      const response = await fetch(imageSelected);
      const blob = await response.blob();

      const ref = firebase.storage().child(Date.now());

      const response2 = await ref.put(blob).then(async (result) => {
        await firebase
          .storage()
          .ref(`${result.metadata.name}`)
          .getDownloadURL();
        .then((photoUrl: string) => {
            imageBlob.push(photoUrl);
          });
      });
      const image = JSON.parse(response2);
      return image;
    })();
  }; */

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
                      <TouchableOpacity
                        onPress={() => {
                          setModalVisible(true);
                        }}
                      >
                        <Text>Abrir Mapa</Text>
                      </TouchableOpacity>
                      {getCoordinates && (
                        <Text>
                          Has seleccionado la posicion {"\n"}
                          {location.latitude}, {location.longitude}
                        </Text>
                      )}
                      <Modal
                        style={styles.label}
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(!modalVisible)}
                      >
                        <MapView
                          style={styles.map}
                          initialRegion={location}
                          provider={PROVIDER_GOOGLE}
                          customMapStyle={mapStyle}
                          showsUserLocation={true}
                          onRegionChange={(region) => setLocation(region)}
                        >
                          <Marker
                            coordinate={{
                              latitude: location.latitude,
                              longitude: location.longitude,
                            }}
                            draggable
                            image={require("../../assets/pin.png")}
                            style={styles.marker}
                          />
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                              setModalVisible(false);
                            }}
                          >
                            <Text style={styles.buttonText}>CANCELAR</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={confirmLocation}
                          >
                            <Text style={styles.buttonText}>ACCEPTAR</Text>
                          </TouchableOpacity>
                        </MapView>
                      </Modal>
                    </View>
                    <View>
                      <Text style={styles.label}>IMAGEN</Text>
                      <View style={styles.imageContainer}>
                        <Text>Selecciona una imagen de la galeria</Text>
                        <Text>Medidas recomendadas 450px-450px</Text>

                        <View style={styles.viewImages}>
                          <TouchableOpacity onPress={chooseFile}>
                            <Text>Abrir galeria</Text>
                          </TouchableOpacity>

                          {/*    <Icon
                            type="material-community"
                            name="camera"
                            color={colors.yellow}
                            containerStyle={styles.containerIcon}
                          /> */}

                          {imageSelected === "" ? (
                            <Icon
                              type="material-community"
                              name="camera"
                              color={colors.yellow}
                              containerStyle={styles.containerIcon}
                              onPress={chooseFile}
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
                        placeholder="Describe como es el sitio y cuentanos su historia. Máximo 3999 carácters."
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
                      <Text style={styles.buttonText}>ENVIAR</Text>
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
  button: {
    backgroundColor: colors.yellow,
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 50,
    right: 10,
    borderRadius: 12,
  },
  marker: {
    height: 10,
    width: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 35,
    position: "absolute",
    left: 9,
    top: 9,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
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
