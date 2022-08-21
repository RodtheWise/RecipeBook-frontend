import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type CommunityStackParamList = {
  Community: undefined;
};

export type CommunityStackScreenProps<
  Screen extends keyof CommunityStackParamList
> = NativeStackScreenProps<CommunityStackParamList, Screen>;
