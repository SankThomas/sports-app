import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-paper";
import Header from "../components/Header";

export default function League({ route, navigation }) {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLeagueTeams = async () => {
      try {
        setIsLoading(true);

        const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${route.params.strLeague}`;

        const res = await fetch(url);
        const data = await res.json();

        setTeams(data.teams);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getLeagueTeams();
  }, []);

  return (
    <SafeAreaView className="bg-[#171717] flex-1">
      <Header navigation={navigation} title={route.params.strLeague} />

      <ScrollView
        className="p-4"
        contentContainerStyle={{
          paddingBottom: 64,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View className="flex-row flex-wrap justify-center gap-4">
            {teams.map((team) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Team", team)}
                key={team.idTeam}
                className="bg-[#222222] p-4 rounded-lg w-[150px]"
              >
                <Image
                  source={{ uri: team.strTeamBadge }}
                  className="w-full h-[120px] object-contain"
                />
                <Text
                  style={{
                    fontFamily: "asapBold",
                  }}
                  className="text-white mt-4 text-center"
                >
                  {team.strTeam}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
