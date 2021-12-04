import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RoutesEnum from "../navigation/routes";

export type RootStackParamList = {
  [RoutesEnum.explorar]: undefined;
  [RoutesEnum.login]: undefined;
  [RoutesEnum.crear]: undefined;
  [RoutesEnum.miLista]: undefined;
  [RoutesEnum.ajustes]: undefined;
  [RoutesEnum.detalle]: undefined;
  [RoutesEnum.tabNavigator]: undefined;
};

export type ExploreScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.explorar
>;

export type ExploreScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.explorar
>;

export type LoginScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.login
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.login
>;

export type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.detalle
>;

export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.detalle
>;

export type TabNavigatorScreenRouteProp = RouteProp<
  RootStackParamList,
  RoutesEnum.tabNavigator
>;

export type TabNavigatorScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RoutesEnum.tabNavigator
>;
