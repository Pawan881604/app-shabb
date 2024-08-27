import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "../../common/buttons/CustomButton";
import { getToken, removeToken } from "../../../lib/AsyncStorage/asyncStorage";

const Home = () => {
  const handleSubmit = async () => {
    const key = await getToken("token");
    console.log(key);
  };
  const handleSubmitr = async () => {
    const key = await removeToken("token");
    console.log(key);
  };
  return (
    <View className="pt-10 px-2">
      <View className="flex bg-black flex-row items-center">
        <View className="w-3/4">
          <View>
            <Text>demo demo demo</Text>
            <Text>total ratings</Text>
          </View>
          <View>
            <Text>discription</Text>
            <Text>...more</Text>
          </View>
        </View>
        <View className="w-3/12">
          <View className="max-w-2">
            <Image
              source={require("../../../../assets/logo.png")}
              style={{ width: 100, height: 130 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <CustomButton
        title="Enter OTP"
        loading={false}
        color={"bg-black py-2 rounded-lg mt-5"}
        onPress={handleSubmit}
      />
      <CustomButton
        title="Enter OTP"
        loading={false}
        color={"bg-black py-2 rounded-lg mt-5"}
        onPress={handleSubmitr}
      />
    </View>
  );
};
export default Home;
