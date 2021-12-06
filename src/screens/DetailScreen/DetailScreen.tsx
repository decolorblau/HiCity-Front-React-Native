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
import ILandmark from "../../types/landmarkInterface";
import useUser from "../../hooks/useUser";

interface ILandmarkDetailsProps {
  route: DetailScreenRouteProp;
}

const DetailScreen = ({ route }: ILandmarkDetailsProps) => {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const {
    params: { idLandmark },
  } = route;
  const { landmarks } = useLandmarks();
  const initialLandmark = {
    title: "",
    city: "",
    category: "",
    imageUrl: "",
    introduction: "",
    description: "",
    latitude: "",
    longitude: "",
    id: "",
  };
  const [currentLandmark, setCurrentLandmark] = useState(initialLandmark);

  const {
    user: { isAuthenticated },
  } = useUser();

  useMemo(() => {
    setCurrentLandmark(
      landmarks.find((landmark: ILandmark) => landmark.id === idLandmark)
    );
  }, [idLandmark, currentLandmark]);

  /*   const onEdit = (landmark) => {
    setCurrentLandmark(landmark);
    setIsEditing(true);
  }; */
  const goToEdit = (idLandmark: string) => {
    navigation.navigate(RoutesEnum.edit, { idLandmark });
  };

  return currentLandmark !== initialLandmark ? (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Image source={{ uri: currentLandmark.imageUrl }} />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutesEnum.explorar);
              }}
            >
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>{currentLandmark.category}</Text>
          </View>
          <TouchableOpacity>
            <Image source={require("../../../assets/icon.png")} />
          </TouchableOpacity>
          <View>
            <Text>{currentLandmark.title}</Text>
            <Text>{currentLandmark.city}</Text>
            <Text>{currentLandmark.description}</Text>
          </View>
          {isAuthenticated && (
            <>
              <TouchableOpacity
                onPress={() => {
                  goToEdit(currentLandmark.id);
                }}
              >
                <Text>Editar contenido {">"}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Borrar punto icónico</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Text>Loading...</Text>
  );
};

export default DetailScreen;
