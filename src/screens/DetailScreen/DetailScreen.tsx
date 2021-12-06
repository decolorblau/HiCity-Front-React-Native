import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
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
  const { landmarks, loadByIdLandmark } = useLandmarks();
  const initialLandmark = [
    {
      title: "",
      city: "",
      category: "",
      imageUrl: "",
      introduction: "",
      description: "",
      latitude: "",
      longitude: "",
      address: "",
    },
  ];
  const [newLandmark, setNewLandmark] = useState(initialLandmark);

  useEffect(() => {
    loadByIdLandmark(idLandmark);
    setNewLandmark(landmarks);
  }, [idLandmark, loadByIdLandmark]);

  return (
    <>
      (newLandmark !== initialLandmark && (
      <SafeAreaView>
        <ScrollView>
          <View>
            <View>
              <Image source={{ uri: newLandmark[0].imageUrl }} />

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(RoutesEnum.explorar);
                }}
              >
                <Text>Back</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text>{newLandmark[0].category}</Text>
            </View>
            <TouchableOpacity>
              <Image source={require("../../../assets/icon.png")} />
            </TouchableOpacity>
            <View>
              <Text>{newLandmark[0].title}</Text>
              <Text>{newLandmark[0].city}</Text>
              <Text>{newLandmark[0].description}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutesEnum.edit);
              }}
            >
              <Text>Editar contenido {">"}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      ) );
    </>
  );
};

export default DetailScreen;
