import React, { useEffect, useMemo, useState } from "react";
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
  const { landmark, loadByIdLandmark } = useLandmarks();
  const initialLandmark = {
    title: "",
    city: "",
    category: "",
    imageUrl: "",
    introduction: "",
    description: "",
    latitude: "",
    longitude: "",
  };
  const [newLandmark, setNewLandmark] = useState(initialLandmark);

  useEffect(() => {
    loadByIdLandmark(idLandmark);
  }, [idLandmark, loadByIdLandmark]);

  useMemo(() => {
    setNewLandmark(landmark);
  }, [landmark]);

  return newLandmark !== initialLandmark ? (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Image source={{ uri: newLandmark.imageUrl }} />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutesEnum.explorar);
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
  ) : (
    <Text>Loading...</Text>
  );
};

export default DetailScreen;
