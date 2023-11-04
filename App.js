import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FeatherIcons from "@expo/vector-icons/Feather";

import FirstScreen from "./screens/First";
import SecondScreen from "./screens/Second";
import ThirdScreen from "./screens/Third";
import FourthScreen from "./screens/Fourth";
import HomeIcon from "./svgIcons/HomeIcon";
import LupaIcon from "./svgIcons/LupaIcon";

const Tab = createBottomTabNavigator();

export default function App() {
  // focused && "red"

  // if (focused) {
  //   return true;
  // }

  // Aqui pueden ver las cosas del header
  // https://reactnavigation.org/docs/headers/

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false, // Aqui pueden cambiar si hay iconos o no
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          options={{
            title: "Primero",
            tabBarIcon: ({ focused }) => {
              return <HomeIcon />;
            },
          }}
          name="FirstScreen"
          component={FirstScreen}
        />

        <Tab.Screen
          options={{
            title: "Segundo",
            tabBarIcon: ({ focused }) => {
              return <LupaIcon />;
            },
          }}
          name="SecondScreen"
          component={SecondScreen}
        />

        <Tab.Screen
          options={{
            title: "Tercero",
            tabBarIcon: ({ focused }) => (
              <FeatherIcons name="map-pin" size={32} color={focused && "red"} />
            ),
          }}
          name="ThirdScreen"
          component={ThirdScreen}
        />

        <Tab.Screen
          options={{
            title: "Cuarto",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="settings-outline"
                size={32}
                color={focused && "red"}
              />
            ),
            // headerTitle: (props) => (
            //   <View {...props}>
            //     <Text>Titulo Personal</Text>
            //   </View>
            // ),
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
