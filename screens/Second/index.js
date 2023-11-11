import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FlechaDerechaVentura from "../../svgIcons/FlechaDerechaVentura";
import FlechaIzquierdaVentura from "../../svgIcons/FlechaIzquierdaVentura";
import { ALTURA_BOTON } from "../../config/boton";

const SecondScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 80, // Esto se tiene que ajustar
        paddingHorizontal: 30,
      }}
    >
      <View
        style={{
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <Text style={{ fontSize: 20 }}>Nuevo destino</Text>
      </View>
      <View style={{ padding: 10 }}>
        <TouchableOpacity
          onPress={() => console.log("hola")}
          style={{
            backgroundColor: "#FF8989",
            height: ALTURA_BOTON,
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 16,
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <FlechaIzquierdaVentura />
          <Text style={{ fontSize: 20, color: "white" }}>Ventura Mall</Text>
          <FlechaDerechaVentura />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondScreen;
