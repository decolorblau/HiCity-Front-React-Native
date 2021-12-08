import React, { useState } from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import styles from "./ModalLandmarks.styles";
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
      <View style={styles.imageContainer}>
        <Image style={styles.modalImage} source={{ uri: landmark.imageUrl }} />
      </View>
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
      </View>
      <View>
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

export default ModalLandmark;
