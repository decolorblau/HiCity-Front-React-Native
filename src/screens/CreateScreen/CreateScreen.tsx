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
  Image,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import { colors, fontSize } from "../../styles/hicity.styles";
import useLandmarks from "../../hooks/useLandmarks";

const CreateScreen = () => {
  const initialLandmark = {
    title: "",
    city: "",
    category: "",
    imageUrl: "",
    introduction: "",
    description: "",
    latitude: "",
    longitude: "",
    address: "",
  };

  const [landmarkData, setLandmarkData] = useState(initialLandmark);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState();
  const [image, setImage] = useState({});

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
    const newLandmark = new FormData();
    newLandmark.append("title", landmarkData.title.toUpperCase());
    newLandmark.append("city", landmarkData.city.toUpperCase());
    newLandmark.append("category", landmarkData.category);
    newLandmark.append("introduction", landmarkData.introduction);
    newLandmark.append("description", landmarkData.description);
    newLandmark.append("imageUrl", landmarkData.imageUrl);
    newLandmark.append("latitude", "41.34566");
    newLandmark.append("longitude", "2.45621");
    return newLandmark;
  };

  const onSubmit = () => {
    const newLandmark = generateFormData();
    createLandmark(newLandmark);
    resetForm();
  };

  const resetForm = () => {
    setLandmarkData(initialLandmark);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
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
                          /*  setSelectedCategory(itemValue) */
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
                        <TouchableOpacity onPress={pickImage}>
                          <Text>Selecciona una imagen de la galeria</Text>
                        </TouchableOpacity>
                        {/* {image && (
                          <Image source={{ uri: image }} style={styles.image} />
                        )} */}
                      </View>
                      <TextInput
                        style={styles.input}
                        value={landmarkData.imageUrl}
                        placeholder="Medidas recomendadas 450px-450px"
                        onChangeText={(data) =>
                          changeLandmarkData(data, "imageUrl")
                        }
                        testID="imageUrl"
                        textContentType="URL"
                      />
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
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  dataContainer: {
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
});

export default CreateScreen;
