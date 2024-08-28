import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Share,
  RefreshControl,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons"; // Corrected import
import CustomButton from "../../common/buttons/CustomButton";
import { shareHandler } from "../../../lib/shareHandler";
import useRefresh from "../../common/refresh/useRefresh";

const textToCopy = "https://Example.com/";
const copyToClipboard = async (text) => {
  try {
    await Clipboard.setStringAsync(text);
    Alert.alert(
      "Copied to clipboard",
      `Text: "${text}" has been copied to the clipboard.`
    );
  } catch (error) {
    Alert.alert("Error", "Failed to copy text to clipboard");
  }
};

// const BetcodeHandler = async (text) => {
//   try {
//     await Clipboard.setStringAsync(text);
//     Alert.alert(
//       "Copied to clipboard",
//       `Text: "${text}" has been copied to the clipboard.`
//     );
//   } catch (error) {
//     Alert.alert("Error", "Failed to copy text to clipboard");
//   }
// };
const Refferal = () => {
  const { refreshing, onRefresh } = useRefresh(2000);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      className="mt-24"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="mb-20 p-2">
        <View className="mb-2">
          <Text className="text-2xl">Refer your friend &</Text>
          <Text className="text-2xl">earn ₹ 100</Text>
        </View>
        <View className="bg-white p-4 mt-2 rounded-lg shadow-lg shadow-slate-500">
          <View className="flex-row items-center gap-3">
            <View className="bg-blue-100 px-4 py-3 shadow-lg shadow-slate-900 w-3/4 rounded-lg">
              <Text className="text-base">{textToCopy}</Text>
            </View>
            <TouchableOpacity onPress={() => copyToClipboard(textToCopy)}>
              <View className="flex-row gap-2">
                <Text>Copy</Text>
                <Ionicons name="copy" size={20} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
          <CustomButton
            color={"bg-black py-2 rounded-lg mt-5"}
            title="Share"
            onPress={() => shareHandler()}
          />
        </View>
        <View className="bg-white p-4 mt-2 rounded-lg shadow-lg shadow-slate-500">
          <View className="flex-row items-center">
            <View className="bg-blue-100 p-1 shadow-lg shadow-slate-900 rounded-full">
              <MaterialCommunityIcons name="star" size={35} color="#2ac5ff" />
            </View>
            <View className="ml-4">
              <Text className="text-xl">Total Reward</Text>
              <View className="flex-row items-center">
                <Text className="text-3xl ">250</Text>
              </View>
            </View>
          </View>
          <View className="mt-5">
            {/* <LinearGradient
            className="rounded-lg shadow-lg shadow-slate-900"
            colors={["#2ac5ff", "#fff"]} // Gradient colors
          >
            <View className="flex-row h-2"></View>
          </LinearGradient> */}
          </View>
        </View>
        <View className="flex-row gap-1 items-center mt-1 justify-between">
          <View
            className="flex-row p-4 items-center bg-white rounded-lg shadow-lg shadow-slate-500"
            style={{ width: "48.5%" }}
          >
            <View>
              <AntDesign name="clockcircle" size={30} color="#2ac5ff" />
            </View>
            <View className="ml-2">
              <Text className="text-base text-slate-500 font-bold">Activity</Text>
            </View>
          </View>
          <View
            className="flex-row p-4 items-center bg-white rounded-lg shadow-lg shadow-slate-500"
            style={{ width: "48.5%" }}
          >
            <View>
              <FontAwesome name="rupee" size={30} color="#2ac5ff" />
            </View>
            <View className="ml-2">
              <Text className="text-base text-slate-500 font-bold">How to Earn</Text>
            </View>
          </View>
        </View>
        <View className="mt-3">
          <View className="flex-row justify-between p-1">
            <View>
              <Text className="text-2xl font-semibold">Reward</Text>
            </View>
            <View>
              <Text> See All</Text>
            </View>
          </View>
          {Array(5)
            .fill(null)
            .map((item, i) => (
              <View
                key={i}
                className="flex-row p-4 mt-1 items-center bg-white rounded-lg shadow-lg shadow-slate-500"
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
                <View style={{ width: "60%" }} className="mx-2">
                  <Text className="text-sm">5% Off on Your Next Bet</Text>
                </View>
                <View style={{ width: "20%" }}>
                  <TouchableOpacity
                    className="bg-black p-2 rounded-lg"
                    onPress={() => BetcodeHandler("code-is-1")}
                  >
                    <Text className="text-white text-center text-sm">
                      Redeem
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Refferal;
