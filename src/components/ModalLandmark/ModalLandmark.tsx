import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { useNavigation } from "@react-navigation/core";
import RoutesEnum from "../../navigation/routes";
import { ExploreScreenNavigationProp } from "../../types/navigation.types";

interface IModalLandmarkProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  landmark: any;
}

const ModalLandmark = ({ landmark }: IModalLandmarkProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const navigation = useNavigation<ExploreScreenNavigationProp>();

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
            {/*  <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutesEnum.detalle);
              }}
            >
              <Text style={styles.goDetail}>{"Ver detalle >"}</Text>
            </TouchableOpacity> */}
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

const styles = StyleSheet.create({
  imageContainer: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    position: "absolute",
    left: 20,
    top: -85,
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    height: "100%",
    width: 150,
    borderRadius: 20,
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
    right: 70,
    top: 20,
  },
  category: {
    color: colors.white,
    fontSize: fontSize.extraText,
  },
  modaltitle: {
    marginTop: 55,
    color: colors.darkGrey,
    fontSize: fontSize.h3,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalText: {
    marginBottom: 15,
    color: colors.grey,
    width: 235,
    height: 70,
  },
  buttonPlay: {
    width: 70,
    height: 70,
    borderRadius: 90,
    backgroundColor: colors.white,
    position: "absolute",
    right: 0,
    top: -120,
  },
  play: {
    color: colors.yellow,
    fontSize: 80,
    top: 0,
    right: -3,
    position: "absolute",
  },
  goDetail: {
    color: colors.yellow,
  },
});

export default ModalLandmark;
