import React from "react";
import { View, Text } from "react-native";

const ThirdScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: "700", fontSize: 20 }}>Tercer Screen</Text>
      <View
        style={{
          flex: 3,
          backgroundColor: "red",
          padding: 10,
        }}
      >
        <View style={{ backgroundColor: "green", flex: 1 }} />
        <View style={{ backgroundColor: "yellow", flex: 2 }} />
      </View>

      <View
        style={{
          flex: 7,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Flex 2</Text>
      </View>
    </View>
  );
};

export default ThirdScreen;
