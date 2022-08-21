import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassesScreen from "../../screens/classes/ClassesScreen";
import { ClassesStackParamList } from "../../types/navigation/ClassesStack";

const ClassesStack = createNativeStackNavigator<ClassesStackParamList>();

const ClassesStackNavigator = () => {
  return (
    <ClassesStack.Navigator initialRouteName="Classes">
      <ClassesStack.Screen name="Classes" component={ClassesScreen} />
    </ClassesStack.Navigator>
  );
};

export default ClassesStackNavigator;
