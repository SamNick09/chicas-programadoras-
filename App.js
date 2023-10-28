import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FeatherIcons from "@expo/vector-icons/Feather";

import FirstScreen from "./screens/First";
import SecondScreen from "./screens/Second";
import ThirdScreen from "./screens/Third";
import FourthScreen from "./screens/Fourth";

const Tab = createBottomTabNavigator();

export default function App() {
  // focused && "red"

  // if (focused) {
  //   return true;
  // }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false, // Aqui pueden cambiar si hay iconos o no
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <AntDesign name="home" size={32} color={focused && "red"} />
              );
            },
          }}
          name="FirstScreen"
          component={FirstScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="menu" size={32} color={focused && "red"} />
            ),
          }}
          name="SecondScreen"
          component={SecondScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <FeatherIcons name="map-pin" size={32} color={focused && "red"} />
            ),
          }}
          name="ThirdScreen"
          component={ThirdScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="settings-outline"
                size={32}
                color={focused && "red"}
              />
            ),
          }}
          name="FourthScreen"
          component={FourthScreen}
        />
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
