import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RoutesEnum from "../navigation/routes";

export type RootStackParamList = {
  [RoutesEnum.explorar]: undefined;
  [RoutesEnum.detalle]: { idLandmark: string };
};
export type RootTabParamList = {
  [RoutesEnum.stackExplorar]: undefined;
  [RoutesEnum.crear]: undefined;
  [RoutesEnum.miLista]: undefined;
  [RoutesEnum.ajustes]: undefined;
  [RoutesEnum.goIn]: undefined;
};

export type ExploreScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.explorar
>;

export type ExploreScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.explorar
>;

// export type LoginScreenRouteProp = RouteProp<
//   RootStackParamList,
//   RoutesEnum.login
// >;

// export type LoginScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   RoutesEnum.login
// >;
export type GoInScreenRouteProp = RouteProp<RootTabParamList, RoutesEnum.goIn>;

export type GoInScreenNavigationProp = NativeStackNavigationProp<
  RootTabParamList,
  RoutesEnum.goIn
>;
// export type RegisterScreenRouteProp = RouteProp<
//   RootStackParamList,
//   RoutesEnum.register
// >;

// export type RegisterScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   RoutesEnum.register
// >;

export type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.detalle
>;

export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.detalle
>;

export type StackExploreScreenRouteProp = RouteProp<
  RootTabParamList,
  RoutesEnum.stackExplorar
>;

export type StackExploreScreenNavigationProp = NativeStackNavigationProp<
  RootTabParamList,
  RoutesEnum.stackExplorar
>;
