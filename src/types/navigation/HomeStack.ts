import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeStackParamList = {
  Home: undefined;
};

export type ProfileStackScreenProps<Screen extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, Screen>;
