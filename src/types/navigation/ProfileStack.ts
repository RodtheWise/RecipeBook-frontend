import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ProfileStackParamList = {
  Profile: undefined;
};

export type ProfileStackScreenProps<
  Screen extends keyof ProfileStackParamList
> = NativeStackScreenProps<ProfileStackParamList, Screen>;
