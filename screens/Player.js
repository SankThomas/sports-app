import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function Player({ navigation, route }) {
  return (
    <SafeAreaView className="bg-[#171717] flex-1">
      <Header navigation={navigation} title={route.params.strPlayer} />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 64,
        }}
        className="p-4"
      >
        <Image
          source={{ uri: route.params.strRender }}
          className="h-[300px] w-full object-cover"
        />

        <View>
          <Text
            style={{
              fontFamily: "asapRegular",
            }}
            className="text-white/75 leading-6 mt-8"
          >
            {route.params.strDescriptionEN}
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-center gap-2 mt-8">
          <View className="bg-[#222] p-4 rounded w-[100px]">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-sm text-white mb-2 text-center"
            >
              Nationality
            </Text>
            <Text
              style={{
                fontFamily: "asapRegular",
              }}
              className="text-white/75 text-xs text-center"
            >
              {route.params.strNationality}
            </Text>
          </View>

          <View className="bg-[#222] p-4 rounded w-[100px]">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-sm text-white mb-2 text-center"
            >
              Kit Number
            </Text>
            <Text
              style={{
                fontFamily: "asapRegular",
              }}
              className="text-white/75 text-xs text-center"
            >
              {route.params.strNumber}
            </Text>
          </View>

          <View className="bg-[#222] p-4 rounded w-[100px]">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-sm text-white mb-2 text-center"
            >
              Agent
            </Text>
            <Text
              style={{
                fontFamily: "asapRegular",
              }}
              className="text-white/75 text-xs text-center"
            >
              {route.params.strAgent}
            </Text>
          </View>

          <View className="bg-[#222] p-4 rounded w-[100px]">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-sm text-white mb-2 text-center"
            >
              Date of Birth
            </Text>
            <Text
              style={{
                fontFamily: "asapRegular",
              }}
              className="text-white/75 text-xs text-center"
            >
              {route.params.dateBorn}
            </Text>
          </View>

          <View className="bg-[#222] p-4 rounded w-[100px]">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-sm text-white mb-2 text-center"
            >
              Place of Birth
            </Text>
            <Text
              style={{
                fontFamily: "asapRegular",
              }}
              className="text-white/75 text-xs text-center"
            >
              {route.params.strBirthLocation}
            </Text>
          </View>

          <View className="bg-[#222] p-4 rounded w-[100px]">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-sm text-white mb-2 text-center"
            >
              Ethnicity
            </Text>
            <Text
              style={{
                fontFamily: "asapRegular",
              }}
              className="text-white/75 text-xs text-center"
            >
              {route.params.strEthnicity}
            </Text>
          </View>

          <View className="bg-[#222] p-4 rounded w-[100px]">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-sm text-white mb-2 text-center"
            >
              Position
            </Text>
            <Text
              style={{
                fontFamily: "asapRegular",
              }}
              className="text-white/75 text-xs text-center"
            >
              {route.params.strPosition}
            </Text>
          </View>

          <View className="bg-[#222] p-4 rounded w-[100px]">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-sm text-white mb-2 text-center"
            >
              Height
            </Text>
            <Text
              style={{
                fontFamily: "asapRegular",
              }}
              className="text-white/75 text-xs text-center"
            >
              {route.params.strHeight}
            </Text>
          </View>

          <View className="bg-[#222] p-4 rounded w-[100px]">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-sm text-white mb-2 text-center"
            >
              Weight
            </Text>
            <Text
              style={{
                fontFamily: "asapRegular",
              }}
              className="text-white/75 text-xs text-center"
            >
              {route.params.strWeight}
            </Text>
          </View>
        </View>

        <View className="mt-8">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-4"
          >
            {route.params.strCutout && (
              <Image
                source={{ uri: route.params.strCutout }}
                className="w-[200px] h-[200px] object-contain rounded-lg"
              />
            )}
            {route.params.strRender && (
              <Image
                source={{ uri: route.params.strRender }}
                className="w-[200px] h-[200px] object-contain rounded-lg"
              />
            )}
            {route.params.strFanart1 && (
              <Image
                source={{ uri: route.params.strFanart1 }}
                className="w-[200px] h-[200px] object-contain rounded-lg"
              />
            )}
            {route.params.strFanart2 && (
              <Image
                source={{ uri: route.params.strFanart2 }}
                className="w-[200px] h-[200px] object-contain rounded-lg"
              />
            )}
            {route.params.strFanart3 && (
              <Image
                source={{ uri: route.params.strFanart3 }}
                className="w-[200px] h-[200px] object-contain rounded-lg"
              />
            )}
            {route.params.strFanart4 && (
              <Image
                source={{ uri: route.params.strFanart4 }}
                className="w-[200px] h-[200px] object-contain rounded-lg"
              />
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
