import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import useLandmarks from "../../hooks/useLandmarks";
import { useNavigation } from "@react-navigation/core";
import RoutesEnum from "../../navigation/routes";
import {
  DetailScreenNavigationProp,
  DetailScreenRouteProp,
} from "../../types/navigation.types";

interface ILandmarkDetailsProps {
  route: DetailScreenRouteProp;
}

const DetailScreen = ({ route }: ILandmarkDetailsProps) => {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const {
    params: { idLandmark },
  } = route;
  console.log(idLandmark);
  const { landmarks, loadByIdLandmark } = useLandmarks();
  const initialLandmark = {
    title: "",
    city: "",
    category: "",
    imageUrl: "",
    introduction: "",
    description: "",
    latitude: "",
    longitude: "",
    address: "",
  };
  const [newLandmark, setNewLandmark] = useState(initialLandmark);

  useEffect(() => {
    loadByIdLandmark(idLandmark);
    setNewLandmark(landmarks);
  }, [idLandmark, landmarks, loadByIdLandmark]);

  return (
    <SafeAreaView>
      <View>
        <View>
          <Image source={{ uri: newLandmark.imageUrl }} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(RoutesEnum.stackExplorar);
            }}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{newLandmark.category}</Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../../../assets/icon.png")} />
        </TouchableOpacity>
        <View>
          <Text>{newLandmark.title}</Text>
          <Text>{newLandmark.city}</Text>
          <Text>{newLandmark.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
