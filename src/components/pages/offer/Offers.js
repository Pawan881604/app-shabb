import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import OfferSlider from "../../common/slider/OfferSlider";
import useRefresh from "../../common/refresh/useRefresh";

const Offers = () => {
  const { refreshing, onRefresh } = useRefresh(2000);
  return (
    <View className="mt-20">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className="mb-20">
          <View className="mt-10">
            <View>
              <Text className="text-center text-3xl">Best Offers</Text>
              <Text className="text-center text-sm">
                Check out out top-rated tours
              </Text>
            </View>
            <View className="mt-5">
              <OfferSlider />
            </View>

            <View className="flex-row flex-wrap p-3 justify-between">
              {Array(10)
                .fill(null)
                .map((item, i) => (
                  <View
                    key={i}
                    className="flex-row p-4 mt-2 items-center bg-white rounded-lg shadow-lg shadow-slate-500"
                  >
                    <View
                      style={{ width: "15%" }}
                      className="bg-blue-100 p-1 shadow-lg shadow-slate-900 rounded-full"
                    >
                      <MaterialCommunityIcons
                        name="controller-classic"
                        size={40}
                        color="#2ac5ff"
                      />
                    </View>
                    <View style={{ width: "75%" }} className="mx-2">
                      <Text className="text-sm">5% Off on Your Next Bet</Text>
                    </View>
                    <View style={{ width: "5%" }}>
                      <TouchableOpacity
                      // className="bg-black p-2 rounded-lg"
                      // onPress={() => BetcodeHandler("code-is-1")}
                      >
                        <AntDesign name="right" size={20} color="#2ac5ff" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
            </View>
          </View>
          <View className="p-3">
            <View className="mb-5">
              <Text className="text-lg font-bold">Expire Soon</Text>
            </View>
            <View className="flex-row flex-wrap gap-1">
              {Array(5)
                .fill(null)
                .map((item, i) => (
                  <View
                    key={i}
                    className="p-1 bg-white rounded-lg"
                    style={{ width: "32%" }}
                  >
                    <View className="w-2full overflow-hidden">
                      <Image
                        resizeMode="cover"
                        style={{ width: 100, height: 80 }}
                        className="w-full"
                        source={require("../../../../assets/images/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg")}
                      />
                    </View>
                    <Text className="text-sm text-center">Get 20% off</Text>
                    <Text className="text-sm text-center font-bold">
                      First Bet
                    </Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Offers;
