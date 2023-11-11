import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FlechaDerechaVentura from "../../svgIcons/FlechaDerechaVentura";
import FlechaIzquierdaVentura from "../../svgIcons/FlechaIzquierdaVentura";
import { ALTURA_BOTON } from "../../config/boton";

const SecondScreen = () => {
  const [destino, setDestino] = React.useState("izquierda");

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
        <View
          style={{
            backgroundColor: "#FF8989",
            height: ALTURA_BOTON,
            borderRadius: 16,
            flexDirection: "row",
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setDestino("izquierda");
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 0.3,
            }}
          >
            <FlechaIzquierdaVentura />
          </TouchableOpacity>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Ventura Mall</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setDestino("derecha");
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 0.3,
            }}
          >
            <FlechaDerechaVentura />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text>Direccion:</Text>
          <Text>{destino}</Text>
        </View>
      </View>
    </View>
  );
};

export default SecondScreen;
