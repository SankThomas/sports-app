import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";

export default function Team({ route, navigation }) {
  const [fullText, setFullText] = useState(false);
  const [stadiumText, setStadiumText] = useState(false);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 32,
        }}
        className="bg-[#171717] flex-1"
      >
        {route.params.strTeamFanart1 && (
          <Image
            source={{ uri: route.params.strTeamFanart1 }}
            className="h-[250px] w-full"
          />
        )}

        {!route.params.strTeamFanart1 ? (
          <View className="mt-8">
            <Header navigation={navigation} title="" />
          </View>
        ) : (
          <Header navigation={navigation} title="" />
        )}

        <View className="px-4 space-y-12">
          <View>
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-white text-2xl"
            >
              {route.params.strTeam}
            </Text>

            <Pressable
              onPress={() => setFullText(!fullText)}
              className="bg-[#222] p-4 rounded-lg mt-2"
            >
              {!fullText ? (
                <Text
                  style={{
                    fontFamily: "asapRegular",
                  }}
                  className="text-white/75 leading-6"
                >
                  {`${route.params.strDescriptionEN.substring(0, 300)}...`}
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: "asapRegular",
                  }}
                  className="text-white/75 leading-6"
                >
                  {route.params.strDescriptionEN}
                </Text>
              )}
            </Pressable>
          </View>

          <View className="space-y-8">
            <View className="flex-row items-center justify-between">
              <Text
                style={{
                  fontFamily: "asapBold",
                }}
                className="text-xl text-white"
              >
                Team
              </Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Players", route.params.strTeam)
                }
              >
                <Text
                  style={{
                    fontFamily: "asapRegular",
                  }}
                  className="bg-[#222] py-3 px-6 rounded text-white/75 text-xs"
                >
                  All Players
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between">
              <View>
                <Image
                  source={{ uri: route.params.strTeamBadge }}
                  className="w-[100px] h-[100px]"
                />
              </View>

              <View>
                <Image
                  source={{ uri: route.params.strTeamJersey }}
                  className="w-[150px] h-[150px]"
                />
              </View>
            </View>

            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
              >
                {route.params.strTeamFanart1 && (
                  <Image
                    source={{ uri: route.params.strTeamFanart1 }}
                    className="h-[180px] w-[250px] rounded-lg"
                  />
                )}
                {route.params.strTeamFanart2 && (
                  <Image
                    source={{ uri: route.params.strTeamFanart2 }}
                    className="h-[180px] w-[250px] rounded-lg"
                  />
                )}
                {route.params.strTeamFanart3 && (
                  <Image
                    source={{ uri: route.params.strTeamFanart3 }}
                    className="h-[180px] w-[250px] rounded-lg"
                  />
                )}
                {route.params.strTeamFanart4 && (
                  <Image
                    source={{ uri: route.params.strTeamFanart4 }}
                    className="h-[180px] w-[250px] rounded-lg"
                  />
                )}
              </ScrollView>
            </View>
          </View>

          <View className="space-y-4">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-xl text-white"
            >
              Home Stadium: {route.params.strStadium}
            </Text>

            <View>
              {route.params.strStadiumThumb && (
                <Image
                  source={{ uri: route.params.strStadiumThumb }}
                  className="w-full h-[200px] rounded-lg"
                />
              )}

              <View className="flex-row justify-center flex-wrap gap-4 mt-1">
                <View className="bg-[#222] w-[150px] p-4 rounded">
                  <Text
                    style={{
                      fontFamily: "asapBold",
                    }}
                    className="text-center text-white text-sm"
                  >
                    Location
                  </Text>
                  <Text
                    style={{
                      fontFamily: "asapRegular",
                    }}
                    className="text-center text-white/75 text-xs mt-2"
                  >
                    {route.params.strStadiumLocation}
                  </Text>
                </View>

                <View className="bg-[#222] w-[150px] p-4 rounded">
                  <Text
                    style={{
                      fontFamily: "asapBold",
                    }}
                    className="text-center text-white text-sm"
                  >
                    Capacity
                  </Text>
                  <Text
                    style={{
                      fontFamily: "asapRegular",
                    }}
                    className="text-center text-white/75 text-xs mt-2"
                  >
                    {route.params.intStadiumCapacity}
                  </Text>
                </View>
              </View>

              <Pressable
                onPress={() => setStadiumText(!stadiumText)}
                className="bg-[#222] p-4 rounded-lg mt-4"
              >
                {stadiumText ? (
                  <Text
                    style={{
                      fontFamily: "asapRegular",
                    }}
                    className="text-white/75 leading-6"
                  >
                    {route.params.strStadiumDescription}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontFamily: "asapRegular",
                    }}
                    className="text-white/75 leading-6"
                  >
                    {`${route.params.strStadiumDescription.substring(
                      0,
                      200
                    )}...`}
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
