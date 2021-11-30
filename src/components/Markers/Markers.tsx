import { useEffect } from "react";
import React from "react";
import { Text } from "react-native";
import { Marker } from "react-native-maps";
import useLandmarks from "../../hooks/useLandmarks";

const Markers = () => {
  const { landmarks, loadLandmarks } = useLandmarks();

  useEffect(() => {
    loadLandmarks();
  }, [loadLandmarks]);

  return (
    <>
      {landmarks.map((landmark: any) => (
        <>
          <Marker
            key={landmark.id}
            coordinate={{
              latitude: landmark.latitude,
              longitude: landmark.longitude,
            }}
          />
        </>
      ))}
    </>
  );
};

export default Markers;
