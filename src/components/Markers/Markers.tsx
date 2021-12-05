import React from "react";
import { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import useLandmarks from "../../hooks/useLandmarks";
import ILandmark from "../../types/landmarkInterface";
import {
  View,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import ModalLandmark from "../ModalLandmark/ModalLandmark";
import { colors } from "../../styles/hicity.styles";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import RoutesEnum from "../../navigation/routes";
import { ExploreScreenNavigationProp } from "../../types/navigation.types";

const Markers = () => {
  const { landmarks, loadLandmarks } = useLandmarks();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLandmark, setCurrentLandmark] = useState({});
  const navigation = useNavigation<ExploreScreenNavigationProp>();

  useEffect(() => {
    loadLandmarks();
  }, [loadLandmarks]);

  const onLoadClick = (id: string | undefined) => {
    setModalVisible(true);
    setCurrentLandmark(
      landmarks.find((landmark: { id: string }) => landmark.id === id)
    );
  };

  const close = () => {
    setModalVisible(!modalVisible);
    Speech.stop();
  };

  const goDetail = () => {
    navigation.navigate(RoutesEnum.detalle, { idLandmark: landmark.id });
    close();
  };

  return (
    <>
      {landmarks.map((landmark: ILandmark) => (
        <View key={landmark.id}>
          <Marker
            coordinate={{
              latitude: landmark.latitude,
              longitude: landmark.longitude,
            }}
            image={require("../../../assets/favicon.png")}
            onPress={() => {
              onLoadClick(landmark.id);
            }}
          >
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(!modalVisible)}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <ModalLandmark landmark={currentLandmark} />

                  <Pressable style={styles.button} onPress={() => close()}>
                    <Ionicons style={styles.textStyle} name="close" />
                  </Pressable>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(RoutesEnum.detalle, {
                        idLandmark: landmark.id,
                      });
                      close();
                    }}
                  >
                    <Text style={styles.goDetail}>{"Ver detalle >"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </Marker>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    height: 240,
    marginBottom: 100,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 25,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: colors.lightGrey,
    fontWeight: "400",
    fontSize: 28,
  },
  button: {
    width: 50,
    height: 50,
    position: "absolute",
    right: -5,
    top: 15,
  },
  goDetail: {
    color: colors.yellow,
  },
});
export default Markers;
