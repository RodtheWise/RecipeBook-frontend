import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunityScreen from "../../screens/community/CommunityScreen";
import { CommunityStackParamList } from "../../types/navigation/CommunityStack";

const CommunityStack = createNativeStackNavigator<CommunityStackParamList>();

const CommunityStackNavigator = () => {
  return (
    <CommunityStack.Navigator initialRouteName="Community">
      <CommunityStack.Screen name="Community" component={CommunityScreen} />
    </CommunityStack.Navigator>
  );
};

export default CommunityStackNavigator;
