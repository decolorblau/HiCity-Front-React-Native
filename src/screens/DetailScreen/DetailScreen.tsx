import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Modal,
} from "react-native";
import useLandmarks from "../../hooks/useLandmarks";
import { useNavigation } from "@react-navigation/core";
import RoutesEnum from "../../navigation/routes";
import {
  DetailScreenNavigationProp,
  DetailScreenRouteProp,
} from "../../types/navigation.types";
import ILandmark from "../../types/landmarkInterface";
import useUser from "../../hooks/useUser";
import { colors, fontSize } from "../../styles/hicity.styles";

interface ILandmarkDetailsProps {
  route: DetailScreenRouteProp;
}

const DetailScreen = ({ route }: ILandmarkDetailsProps) => {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const {
    params: { idLandmark },
  } = route;
  const { landmarks } = useLandmarks();
  const initialLandmark = {
    title: "",
    city: "",
    category: "",
    imageUrl: "",
    introduction: "",
    description: "",
    latitude: "",
    longitude: "",
    id: "",
    lastUpdate: "",
  };
  const [currentLandmark, setCurrentLandmark] = useState(initialLandmark);
  const [date, setDate] = useState("");
  const { deleteLandmark } = useLandmarks();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    user: { isAuthenticated },
  } = useUser();

  useMemo(() => {
    setCurrentLandmark(
      landmarks.find((landmark: ILandmark) => landmark.id === idLandmark)
    );
    const dateOptions: object = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setDate(
      new Date(currentLandmark.lastUpdate).toLocaleDateString(
        "es-ES",
        dateOptions
      )
    );
  }, [idLandmark, currentLandmark, date]);

  const onDelete = (idLandmark: string) => {
    deleteLandmark(idLandmark);
    setModalVisible(!modalVisible);
    navigation.navigate(RoutesEnum.explorar);
  };

  const goToEdit = (idLandmark: string) => {
    navigation.navigate(RoutesEnum.edit, { idLandmark });
  };
  return currentLandmark !== initialLandmark ? (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
        <StatusBar backgroundColor="trasparent" translucent={true} />
        <View>
          <View style={styles.imageContainer}>
            {currentLandmark.imageUrl && (
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{ uri: currentLandmark.imageUrl }}
              />
            )}

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.navigate(RoutesEnum.explorar);
              }}
            >
              <Text style={styles.backText}>{"< "} Back</Text>
            </TouchableOpacity>
            <View style={styles.categoryContainer}>
              <Text style={styles.category}>
                {currentLandmark.category.toUpperCase()}
              </Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{currentLandmark.title}</Text>
            <Text style={styles.city}>{currentLandmark.city}</Text>
            <Text style={styles.text}>{currentLandmark.description}</Text>
          </View>
          {isAuthenticated && (
            <TouchableOpacity
              onPress={() => {
                goToEdit(currentLandmark.id);
              }}
              style={styles.textContainerButton}
            >
              <Text style={styles.text}>Editar contenido {">"}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.line}></View>
        <View style={styles.footer}>
          <Text style={styles.date}>
            Esta página se ha editado por última vez:{"\n"} {date}
          </Text>
          {isAuthenticated && (
            <>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.textBorrar}>Borrar punto icónico</Text>
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>
                      {currentLandmark.title.toUpperCase()}
                    </Text>
                    <Text style={styles.modalText}>
                      ¿Estas seguro que quieres borrar este punto icónico?
                    </Text>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Cancelar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.button, styles.buttonBorrar]}
                        onPress={() => onDelete(currentLandmark.id)}
                      >
                        <Text style={styles.textStyle}>Borrar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  ) : (
    <Text>Loading...</Text>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  imageContainer: {
    top: 0,
    height: 420,
  },
  image: {
    height: 520,
    width: 520,
    position: "absolute",
    top: -55,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: colors.white,
    borderRadius: 50,
    height: 25,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  backText: {
    color: colors.darkGrey,
    fontSize: fontSize.extraText,
    zIndex: 3,
  },
  categoryContainer: {
    backgroundColor: colors.yellow,
    width: 120,
    height: 22,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 400,
    left: 35,
  },
  category: {
    color: colors.white,
    fontSize: fontSize.text,
    fontWeight: "600",
  },
  textContainer: {
    paddingLeft: 35,
    paddingRight: 30,
  },
  text: {
    fontSize: fontSize.text,
    color: colors.grey,
    marginBottom: 20,
  },
  title: {
    color: colors.darkGrey,
    marginTop: 18,
    marginBottom: 3,
    fontSize: fontSize.h3,
  },
  city: {
    fontSize: fontSize.text,
    color: colors.grey,
    marginBottom: 15,
  },
  textBorrar: {
    fontSize: fontSize.extraText,
    color: colors.lightGrey,
    marginBottom: 60,
  },
  textContainerButton: {
    alignItems: "flex-end",
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  line: {
    backgroundColor: colors.lightGrey,
    height: 1,
    width: "100%",
    marginBottom: 10,
  },
  footer: {
    alignItems: "center",
    marginBottom: 60,
  },
  date: {
    fontSize: fontSize.extraText,
    color: colors.grey,
    marginBottom: 20,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    width: 280,
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    width: 90,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: colors.yellow,
  },

  buttonBorrar: {
    backgroundColor: colors.darkGrey,
  },
  textStyle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    color: colors.darkGrey,
    fontSize: fontSize.text,
    fontWeight: "600",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: colors.darkGrey,
    fontSize: fontSize.text,
  },
});

export default DetailScreen;
