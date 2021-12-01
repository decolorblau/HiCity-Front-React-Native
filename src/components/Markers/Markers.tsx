import { useEffect } from "react";
import React from "react";
import { Marker } from "react-native-maps";
import useLandmarks from "../../hooks/useLandmarks";
import ILandmark from "../../types/landmarkInterface";

const Markers = () => {
  const { landmarks, loadLandmarks } = useLandmarks();

  useEffect(() => {
    loadLandmarks();
  }, [loadLandmarks]);

  return (
    <>
      {landmarks.map((landmark: ILandmark) => (
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
