import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
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
import AutoHeightImage from "react-native-auto-height-image";
import ILandmark from "../../types/landmarkInterface";
import useUser from "../../hooks/useUser";
import styles from "./DetailScreen.styles";

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
              <Text style={styles.textEdit}>Editar contenido {">"}</Text>
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
          <View style={styles.imageLogo}>
            <AutoHeightImage
              width={120}
              source={require("../../assets/logo-hicity.png")}
            />
          </View>
          {/*           <Text style={styles.textFooter}>Made by decolorblau</Text>
          <Text style={styles.textFooter}>ISDI CODERS</Text>
 */}
          <View></View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <Text>Loading...</Text>
  );
};

export default DetailScreen;
