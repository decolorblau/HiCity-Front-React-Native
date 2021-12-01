import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MyListScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Aqui hay tu lista de sitios favoritos guardados. Pero si no ves el
          mapa, como esperas ver tus sitios favoritos aqui? Tu lista está vacia.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MyListScreen;
