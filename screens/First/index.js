import React from "react";
import { View, Text, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AutoIcon from "../../svgIcons/AutoIcon";

const FirstScreen = () => {
  const espacios = useSafeAreaInsets();
  const height = Dimensions.get("window").height;
  const dimensionContenedor = height / 2.3;

  return (
    <View style={{ flex: 1, paddingTop: espacios.top }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 7,
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: 30, color: "#FF6666", fontWeight: "600" }}>
          Hola Maria,
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Encuentra y monitorea tus viajes
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: dimensionContenedor,
        }}
      >
        <View
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "#FF8989",
            borderRadius: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AutoIcon />
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;
