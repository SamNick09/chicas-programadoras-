import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FlechaDerecha from "../../svgIcons/FlechaDerecha";
import { ALTURA_BOTON } from "../../config/boton";

const SecondScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 80, // Esto se tiene que ajustar
        backgroundColor: "red",
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <Text style={{ fontSize: 20 }}>Nuevo destino</Text>
      </View>
      <View style={{ backgroundColor: "blue", padding: 10 }}>
        <View
          style={{
            backgroundColor: "#FF8989",
            height: ALTURA_BOTON,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Ventura Mall</Text>
        </View>
      </View>
    </View>
  );
};

export default SecondScreen;
