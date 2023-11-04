import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AutoIcon from "../../svgIcons/AutoIcon";
import FlechaDerecha from "../../svgIcons/FlechaDerecha";

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
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
              Busca Tus proximos viajes
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("Boton click");
              }}
              style={{
                backgroundColor: "white",
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                borderRadius: 8,
                flexDirection: "row",
                gap: 8,
              }}
            >
              <Text
                style={{ fontSize: 15, color: "#FF8989", fontWeight: "600" }}
              >
                Ver Ahora
              </Text>
              <FlechaDerecha width={15} height={15} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;
