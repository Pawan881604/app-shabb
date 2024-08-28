import React from "react";
import { Image, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const Card = () => {
  return (
   <View className="mb-1 rounded shadow-lg p-3">
     <View className="gap-2 rounded-2xl flex-row items-center">
      <View className="w-3/5">
        <View>
          <Text numberOfLines={2} ellipsizeMode="tail" className="text-xl leading-5">demo demo demo demo</Text>
          <View className="flex-row gap-1 items-center">
            <AntDesign
              name="star"
              size={10}
              color="#fff"
              className="bg-50 p-1 rounded-full"
            />
            <Text className="text-lg font-semibold">4.5</Text>
          </View>
        </View>
        <View className="flex flex-row items-end">
          <Text className="text-sm" numberOfLines={2} ellipsizeMode="tail">
            LORAN, in its original form, wasdf sdsdf s an expensive system to
            implement
          </Text>
        </View>
      </View>
      <View className="w-2/5  bg-slate-200">
        <View className="w-full flex-row justify-center">
          <View className="max-w-28 m-auto">
            <Image
              source={require("../../../../assets/images/logo.png")}
              className="w-28"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
   </View>
  );
};

export default Card;
