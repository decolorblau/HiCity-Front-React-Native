import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import mapStyle from "./MapStyle";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

const Map = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

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

      setLocation(newLocation);
    })();

    setMessage("Waiting...");
    if (error !== "") {
      setMessage(error);
    } else {
      setMessage(JSON.stringify(location));
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.38879,
          longitude: 2.15899,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        showsUserLocation={true}
      />
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
});

export default Map;
