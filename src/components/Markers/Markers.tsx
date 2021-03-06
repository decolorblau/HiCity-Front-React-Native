import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import useLandmarks from "../../hooks/useLandmarks";
import ILandmark from "../../types/landmarkInterface";
import {
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import ModalLandmark from "../ModalLandmark/ModalLandmark";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Markers.styles";

interface IMarkersProps {
  goToDetail: (idLandmark: string) => void;
}

const Markers = ({ goToDetail }: IMarkersProps) => {
  const { landmarks, loadLandmarks } = useLandmarks();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLandmark, setCurrentLandmark] = useState({ id: "" });

  useEffect(() => {
    loadLandmarks();
  }, [loadLandmarks]);

  const onLoadClick = (id?: string) => {
    setModalVisible(true);
    setCurrentLandmark(
      landmarks.find((landmark: { id: string }) => landmark.id === id)
    );
  };

  const close = () => {
    setModalVisible(!modalVisible);
    Speech.stop();
  };

  return (
    <>
      {landmarks.map((landmark: ILandmark) => (
        <View key={landmark.id}>
          <Marker
            accessibilityRole="button"
            coordinate={{
              latitude: landmark.latitude,
              longitude: landmark.longitude,
            }}
            onPress={() => {
              onLoadClick(landmark.id);
            }}
          >
            <>
              <Image
                style={styles.marker}
                source={require("../../assets/pin.png")}
              />
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
                        goToDetail(currentLandmark.id);
                        close();
                      }}
                    >
                      <Text style={styles.goDetail}>{"Ver detalle >"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </>
          </Marker>
        </View>
      ))}
    </>
  );
};

export default Markers;
