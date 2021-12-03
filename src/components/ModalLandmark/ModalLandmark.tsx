import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";

interface IModalLandmarkProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  landmark: any;
}

const ModalLandmark = ({ landmark }: IModalLandmarkProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    const thingToSay = landmark.description;

    if (!isSpeaking) {
      Speech.speak(thingToSay, {
        language: "es",
        pitch: 1,
        rate: 1,
      });
      setIsSpeaking(!isSpeaking);
    } else {
      Speech.stop();
      setIsSpeaking(!isSpeaking);
    }
  };

  return (
    <>
      <Image style={styles.modalImage} source={{ uri: landmark.imageUrl }} />
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{landmark.category.toUpperCase()}</Text>
      </View>
      <View style={styles.allText}>
        <View>
          <View>
            <Text style={styles.modaltitle}>{landmark.title}</Text>
            <Text style={styles.modalText}>{landmark.introduction}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {isSpeaking ? (
          <TouchableOpacity style={styles.buttonPlay} onPress={speak}>
            <Ionicons style={styles.play} name="close-circle" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonPlay} onPress={speak}>
            <Ionicons style={styles.play} name="play-circle" />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalImage: {
    height: 150,
    width: 150,
    left: 20,
    top: -90,
    borderRadius: 20,
    position: "absolute",
  },
  allText: {
    flexDirection: "row",
  },
  categoryContainer: {
    backgroundColor: colors.yellow,
    height: 25,
    width: 118,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 65,
    top: 25,
  },
  category: {
    color: colors.white,
    fontSize: fontSize.extraText,
  },
  modaltitle: {
    marginTop: 42,
    color: colors.darkGrey,
    fontSize: fontSize.h3,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalText: {
    marginBottom: 15,
    color: colors.grey,
    width: 275,
  },
  buttonContainer: {
    alignItems: "flex-start",
  },
  buttonPlay: {
    width: 65,
    height: 65,
    borderRadius: 90,
    backgroundColor: colors.white,
    position: "relative",
  },
  play: {
    color: colors.yellow,
    fontSize: 75,
    position: "absolute",
    top: -10,
    left: -5,
  },
});

export default ModalLandmark;
