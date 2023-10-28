import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FirstScreen from "./screens/First";
import SecondScreen from "./screens/Second";
import ThirdScreen from "./screens/Third";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FirstScreen" component={FirstScreen} />
        <Tab.Screen name="SecondScreen" component={SecondScreen} />
        <Tab.Screen name="ThirdScreen" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
