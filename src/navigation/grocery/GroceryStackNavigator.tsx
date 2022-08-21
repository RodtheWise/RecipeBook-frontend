import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroceryScreen from "../../screens/grocery/GroceryScreen";
import { GroceryStackParamList } from "../../types/navigation/GroceryStack";

const GroceryStack = createNativeStackNavigator<GroceryStackParamList>();

const GroceryStackNavigator = () => {
  return (
    <GroceryStack.Navigator initialRouteName="Grocery">
      <GroceryStack.Screen name="Grocery" component={GroceryScreen} />
    </GroceryStack.Navigator>
  );
};

export default GroceryStackNavigator;
