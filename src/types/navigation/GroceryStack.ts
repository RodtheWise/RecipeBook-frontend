import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type GroceryStackParamList = {
  Grocery: undefined;
};

export type GroceryStackScreenProps<
  Screen extends keyof GroceryStackParamList
> = NativeStackScreenProps<GroceryStackParamList, Screen>;
