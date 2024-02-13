import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";

export default function Leagues({ navigation }) {
  const [leagues, setLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLeagues = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
        );
        const data = await res.json();

        // Filter to remove _No League category
        setLeagues(
          data.leagues.filter((league) => league.strLeague !== "_No League")
        );
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getLeagues();
  }, []);

  return (
    <>
      <SafeAreaView className="bg-[#171717] flex-1">
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 16,
          }}
        >
          <Image
            source={require("../assets/images/banner.png")}
            resizeMode="cover"
            className="w-full h-[250px]"
          />

          <View className="px-4 pt-8">
            <Text
              style={{
                fontFamily: "asapBold",
              }}
              className="text-white text-2xl"
            >
              All Leagues
            </Text>
          </View>

          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <View className="p-4 flex-row flex-wrap justify-center gap-4">
              {leagues !== null ? (
                leagues.map((league) =>
                  // Remove all leagues that are not Soccer related
                  league.strSport !== "Soccer" ? null : (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("League", league)}
                      key={league.idLeague}
                      className="bg-[#222222] p-4 rounded-lg w-[150px]"
                    >
                      <Text
                        style={{
                          fontFamily: "asapBold",
                        }}
                        className="text-white"
                      >
                        {league.strLeague}
                      </Text>
                    </TouchableOpacity>
                  )
                )
              ) : (
                <SafeAreaView>
                  <Text className="text-white font-bold text-center mt-8">
                    There are no teams in this league
                  </Text>
                </SafeAreaView>
              )}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
