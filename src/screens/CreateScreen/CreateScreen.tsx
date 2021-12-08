import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Alert,
  Modal,
  Platform,
} from "react-native";
import { colors } from "../../styles/hicity.styles";
import { Icon, Image } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import useLandmarks from "../../hooks/useLandmarks";
import { Camera } from "expo-camera";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
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
import styles from "./CreateScreen.styles";

interface ILandmarkDetailsProps {
  route?: EditScreenRouteProp;
}

const CreateScreen = ({ route }: ILandmarkDetailsProps) => {
  const navigation = useNavigation<EditScreenNavigationProp>();
  const { createLandmark, landmarks, updateLandmark } = useLandmarks();

  const initialLandmark = {
    title: "",
    city: "",
    category: "",
    imageUrl: "",
    introduction: "",
    description: "",
    latitude: "",
    longitude: "",
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
        (findLandmark: ILandmark) => findLandmark.id === idLandmark
      );
      setLandmarkData(landmark);
      setImageSelected(landmark.imageUrl);
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
          Alert.alert(error);
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
        landmarkData.description.length < 10 ||
        landmarkData.description.length > 4000 ||
        imageSelected === ""
    );
  }, [
    landmarkData.title,
    landmarkData.city,
    landmarkData.category,
    landmarkData.introduction,
    landmarkData.description,
    imageSelected,
  ]);

  const generateFormData = () => {
    if (!isEditing) {
      landmarkData.longitude = `${locationLandmark.longitude.toFixed(4)}`;
      landmarkData.latitude = `${locationLandmark.latitude.toFixed(4)}`;
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
    setImageType("");
    setImageSelected("");
    setImageName("");
    setGetCoordinates(false);
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
        aspect: [4, 3],
        quality: 0,
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
    } catch (catchError) {
      catchError;
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

  return (
    <KeyboardAvoidingView behavior="padding" enabled={true}>
      <ScrollView style={styles.containerMain}>
        <SafeAreaView style={styles.container}>
          <View style={styles.dataContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>NUEVO{"\n"}SITIO ICÓNICO</Text>
            </View>
            <View style={styles.form}>
              <View>
                <Text style={styles.label}>TÍTULO</Text>
                <TextInput
                  style={styles.input}
                  value={landmarkData.title}
                  placeholder="Nombre del nuevo sitio icónico"
                  onChangeText={(data) => changeLandmarkData(data, "title")}
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
                  onChangeText={(data) => changeLandmarkData(data, "city")}
                  testID="city"
                  maxLength={30}
                  textContentType="addressCity"
                />
              </View>
              <View>
                <Text style={styles.label}>CATEGORIA</Text>
                <Picker
                  style={styles.picker}
                  mode="dialog"
                  selectedValue={landmarkData.category}
                  onValueChange={(data) => changeLandmarkData(data, "category")}
                >
                  <Picker.Item label="Selecciona una categoria" value="null" />
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
              {!isEditing && (
                <View>
                  <Text style={styles.label}>UBICACIÓN</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                    }}
                    style={styles.inputMapaContainer}
                  >
                    <Text style={styles.inputMapa}>Abrir Mapa</Text>

                    {getCoordinates && (
                      <Text style={styles.textInfo}>
                        Ubicación seleccionada: {location.latitude.toFixed(4)},{" "}
                        {location.longitude.toFixed(4)}
                      </Text>
                    )}
                  </TouchableOpacity>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                  >
                    <View style={styles.centeredView}>
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
                      </MapView>
                      <View style={styles.mapButtonContainer}>
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
                      </View>
                    </View>
                  </Modal>
                </View>
              )}
              <View>
                <Text style={styles.label}>IMAGEN</Text>
                <View>
                  <Text style={styles.textInfo}>
                    Selecciona una imagen de la galeria:
                  </Text>

                  <View style={styles.inputGalleryContainer}>
                    <TouchableOpacity onPress={chooseFile}></TouchableOpacity>
                    {imageSelected === "" ? (
                      <>
                        <Icon
                          type="material-community"
                          name="camera"
                          color={colors.yellow}
                          containerStyle={styles.containerIcon}
                          onPress={chooseFile}
                        />
                        <Text style={styles.inputMapa}>Abrir galeria</Text>
                      </>
                    ) : (
                      <>
                        <TouchableOpacity onPress={removeImage}>
                          <Image
                            style={styles.miniatureStyle}
                            source={{ uri: imageSelected }}
                          />
                        </TouchableOpacity>
                        <Text style={styles.inputMapa}>Eliminar imagen</Text>
                      </>
                    )}
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.label}>INTRODUCCIÓN</Text>
                <TextInput
                  style={styles.inputMultiline}
                  value={landmarkData.introduction}
                  placeholder="Máximo 120 carácteres"
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
                  style={styles.inputMultilineDescription}
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
                style={buttonDisabled ? styles.buttonDisabled : styles.button}
              >
                <Text style={styles.buttonText}>ENVIAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateScreen;
