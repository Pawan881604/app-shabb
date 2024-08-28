import React from "react";
import { ScrollView, View, RefreshControl } from "react-native";
import Card from "../../common/site-card/Card";
import useRefresh from "../../common/refresh/useRefresh";
const Home = () => {
  const { refreshing, onRefresh } = useRefresh(2000);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      className="mt-24 pr-2 bg-white"
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="mb-16 px-2">
        <View className="mt-0">
          {Array(5)
            .fill(null)
            .map((item, i) => (
              <Card key={i} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
