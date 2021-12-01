import * as React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import mapStyle from "./MapStyle";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import Markers from "../Markers/Markers";

const Map = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [mapRegion, setMapRegion] = useState({
    latitude: 41.38879,
    longitude: 2.15899,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      const newLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      setMapRegion({
        latitude: newLocation.coords.latitude,
        longitude: newLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      setLocation(newLocation);
    })();

    setMessage("Waiting...");
    if (error !== "") {
      setMessage(error);
    } else setMessage(JSON.stringify(location));
  }, [location]);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <MapView
        style={styles.map}
        initialRegion={
          mapRegion

          /* {
          longitude: 41.38879,
          latitude: 2.15899,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        } */
        }
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        showsUserLocation={true}
      >
        <Markers />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  me: {
    width: 24,
    height: 24,
    borderRadius: 50,
    shadowColor: "#ffd25d",
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

export default Map;
