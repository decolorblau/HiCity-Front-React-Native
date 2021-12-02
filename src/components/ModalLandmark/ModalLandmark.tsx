import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";
import ILandmark from "../../types/landmarkInterface";

interface IModalLandmarkProps {
  landmark: any;
}

const ModalLandmark = ({ landmark }: IModalLandmarkProps) => {
  return (
    <>
      <Image style={styles.modalImage} source={{ uri: landmark.imageUrl }} />
      <Text style={styles.modaltitle}>{landmark.title}</Text>
      <Text style={styles.modalText}>{landmark.introduction}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  modalImage: {
    height: 150,
    width: 150,
  },
  modaltitle: {
    marginTop: 30,
    color: colors.darkGrey,
    fontSize: fontSize.h3,
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    color: colors.grey,
  },
});

export default ModalLandmark;
