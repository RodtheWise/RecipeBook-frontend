import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ClassesStackParamList = {
  Classes: undefined;
};

export type ClassesStackScreenProps<
  Screen extends keyof ClassesStackParamList
> = NativeStackScreenProps<ClassesStackParamList, Screen>;
