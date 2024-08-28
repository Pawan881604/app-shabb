import React, { useState, useCallback } from "react";
import { ScrollView, View, RefreshControl } from "react-native";
import Card from "../../common/site-card/Card";
const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulate an API call
    setTimeout(() => {
      // After fetching data from your API, stop the refreshing indicator
      setRefreshing(false);
    }, 2000); // You can adjust this to the actual time your API takes to fetch data
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="mt-24 px-5 bg-white"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="mt-0">
        {Array(5)
          .fill(null)
          .map((item, i) => (
            <Card key={i} />
          ))}
      </View>
    </ScrollView>
  );
};
export default Home;
