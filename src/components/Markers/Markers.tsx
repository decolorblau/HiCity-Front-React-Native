import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import useLandmarks from "../../hooks/useLandmarks";
import ILandmark from "../../types/landmarkInterface";
import {
  View,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ModalLandmark from "../ModalLandmark/ModalLandmark";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/hicity.styles";

const Markers = () => {
  const { landmarks, loadLandmarks } = useLandmarks();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLandmark, setCurrentLandmark] = useState({});

  useEffect(() => {
    loadLandmarks();
  }, [loadLandmarks]);

  const onLoadClick = (id: string | undefined) => {
    setModalVisible(true);
    setCurrentLandmark(
      landmarks.find((landmark: { id: string }) => landmark.id === id)
    );
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

                  <Pressable
                    style={styles.button}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonPlay}>
                      <Ionicons name="play" />
                    </TouchableOpacity>
                  </View>
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
    marginTop: 22,
    marginBottom: 85,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    width: 400,
    height: 240,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
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
  },
  button: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    zIndex: 99,
  },

  buttonContainer: {
    alignItems: "flex-start",
  },
  buttonPlay: {
    width: 65,
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    borderRadius: 90,
    backgroundColor: colors.yellow,
    padding: 10,
  },
});
export default Markers;
