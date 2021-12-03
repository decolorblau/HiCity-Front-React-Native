import React from "react";
import { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import useLandmarks from "../../hooks/useLandmarks";
import ILandmark from "../../types/landmarkInterface";
import { View, Modal, Pressable, Text, StyleSheet } from "react-native";
import ModalLandmark from "../ModalLandmark/ModalLandmark";
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
                  {/*   <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonPlay}>
                      <Ionicons style={styles.play} name="play" />
                    </TouchableOpacity>
                  </View> */}
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
    fontSize: 20,
  },
  button: {
    width: 50,
    height: 50,
    position: "absolute",
    right: -15,
    top: 15,
  },
});
export default Markers;
