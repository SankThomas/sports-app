import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { ActivityIndicator } from "react-native-paper";

export default function Players({ navigation, route }) {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        setIsLoading(true);

        const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=${route.params}`;

        const res = await fetch(url);
        const data = await res.json();

        setPlayers(data.player);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getPlayers();
  }, []);

  return (
    <SafeAreaView className="bg-[#171717] flex-1">
      <Header navigation={navigation} title={`${route.params} Players`} />

      <ScrollView className="p-4">
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View className="flex-row flex-wrap justify-center gap-4">
            {players.map((player) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Player", player)}
                key={player.idPlayer}
                className="w-[150px] bg-[#222] p-4 rounded-lg"
              >
                <Image
                  source={{ uri: player.strCutout }}
                  className="w-full h-[150px]"
                />
                <Text
                  style={{
                    fontFamily: "asapBold",
                  }}
                  className="text-white text-center mt-2"
                >
                  {player.strPlayer}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
