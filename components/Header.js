import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  return (
    <View className="flex-row items-center justify-between p-4">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={24} color="white" />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "asapBold",
        }}
        className="text-white"
      >
        {title}
      </Text>
    </View>
  );
}
