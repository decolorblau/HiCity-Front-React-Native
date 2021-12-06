import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RoutesEnum from "../navigation/routes";

export type RootStackParamList = {
  [RoutesEnum.edit]: { idLandmark: string };
  [RoutesEnum.explorar]: undefined;
  [RoutesEnum.detalle]: { idLandmark: string } | undefined;
};
export type LogRootStackParamList = {
  [RoutesEnum.login]: undefined;
  [RoutesEnum.register]: undefined;
  [RoutesEnum.goIn]: undefined;
  [RoutesEnum.backToMap]: undefined;
};
export type RootTabParamList = {
  [RoutesEnum.stackExplorar]: undefined;
  [RoutesEnum.crear]: undefined;
  [RoutesEnum.miLista]: undefined;
  [RoutesEnum.ajustes]: undefined;
  [RoutesEnum.StackGoIn]: undefined;
};

export type ExploreScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.explorar
>;

export type ExploreScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.explorar
>;
export type EditScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.edit
>;

export type EditScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.edit
>;

export type LoginScreenRouteProp = RouteProp<
  LogRootStackParamList,
  RoutesEnum.login
>;
export type LoginScreenNavigationProp = NativeStackNavigationProp<
  LogRootStackParamList,
  RoutesEnum.login
>;
export type GoInScreenRouteProp = RouteProp<
  LogRootStackParamList,
  RoutesEnum.goIn
>;

export type GoInScreenNavigationProp = NativeStackNavigationProp<
  LogRootStackParamList,
  RoutesEnum.goIn
>;
export type StackGoInScreenRouteProp = RouteProp<
  RootTabParamList,
  RoutesEnum.StackGoIn
>;

export type StackGoInScreenNavigationProp = NativeStackNavigationProp<
  RootTabParamList,
  RoutesEnum.StackGoIn
>;
export type RegisterScreenRouteProp = RouteProp<
  LogRootStackParamList,
  RoutesEnum.register
>;
export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  LogRootStackParamList,
  RoutesEnum.register
>;

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
export type CreateScreenRouteProp = RouteProp<
  RootTabParamList,
  RoutesEnum.crear
>;

export type CreateScreenNavigationProp = NativeStackNavigationProp<
  RootTabParamList,
  RoutesEnum.crear
>;
