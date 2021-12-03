import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

const SettingsScreen = ({ route, navigation }) => {
  /*   const { id } = route.params;
  const { landmarks, loadByIdLandmark } = useLandmarks();
  const [newLandmark, setNewLandmark] = useState({});

  useEffect(() => {
    loadByIdLandmark(id);
    setNewLandmark(landmarks);
  }, [id, landmarks, loadByIdLandmark]);
  */
  return (
    <SafeAreaView>
      <View>
        <View>
          <Image source={require("../../assets/logo-hicity.png")} />
          <TouchableOpacity>
            <Text>Mapa</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>PLAZA</Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../../../assets/icon.png")} />
        </TouchableOpacity>
        <View>
          <Text>PLAÇA CATALUNYA</Text>
          <Text>BARCELONA</Text>
          <Text>
            La plaça Catalunya es el nexo de unión entre la ciudad vieja y el
            Distrito del Ensanche de Barcelona. De aquí parten importantes vías
            de la ciudad como la Rambla, el paseo de Gracia, la rambla de
            Cataluña o las rondas de la Universidad y de San Pedro, y la calle
            de Pelayo, así como la avenida de Portal del Ángel, la gran arteria
            comercial de la ciudad, y antigua puerta de las murallas. HISTORIA
            La plaza de Cataluña hacia 1872, dibujo de Pellicer, grabado de
            Capuz, en La Ilustración Española y Americana. La plaza de Cataluña
            hacia el año 1900. Hasta que se derribaron las murallas, el espacio
            actualmente ocupado por la plaza era una explanada a las afueras de
            la ciudad situada justo enfrente de una de las puertas principales,
            desde donde salían caminos hacia las poblaciones de los alrededores.
            Esto convirtió el lugar en el emplazamiento ideal para situar
            mercados al aire libre, y lo convirtió en un punto importante de la
            vida de la ciudad. Posteriormente, se derribaron las murallas y se
            empezó a construir el Ensanche diseñado por Ildefonso Cerdá. El plan
            urbanístico de Cerdá no incluía ninguna plaza donde ahora está la
            plaza de Cataluña, puesto que según su plan el barrio gótico, igual
            que los otros núcleos de antiguas poblaciones del llano de
            Barcelona, quedaban relegados a barrios periféricos, mientras que el
            nuevo centro debía ser un lugar céntrico y bien comunicado, como por
            ejemplo la plaza de las Glorias Catalanas, que Cerdá diseñó con la
            voluntad de ser el nuevo epicentro, justo en el cruce de las
            principales vías de la ciudad, la avenida Diagonal, la Gran Vía de
            las Cortes Catalanas y la Avenida Meridiana. A diferencia del plan
            Cerdá, el Plan Rovira de 1859, el preferido por el Ayuntamiento y la
            burguesía de la ciudad, sí que preveía una gran plaza en este punto.
            La inercia del uso que se daba a este espacio, combinada con el
            hecho de que el que debía convertirse en la plaza de las Glorias
            Catalanas solo era un descampado alejado de toda construcción,
            hicieron que la ciudad ocupara el solar de la plaza de Cataluña, que
            teóricamente debía ser edificable, con cafés, teatros y barracas de
            feriantes.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
