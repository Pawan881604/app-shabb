import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import PhoneInput from "react-native-phone-number-input";

import { useDispatch, useSelector } from "react-redux";
import { Alert_ } from "../components/common/alert/Alert";
import CustomButton from "../components/common/buttons/CustomButton";
import {
  FETCH_USER_ERROR,
  FETCH_USER_RESET,
} from "../store/redux/constants/user_actionTypes";
import { generateRandomString } from "../lib/generateRandomString";
import { user_auth } from "../api/authapi";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = React.useRef(null);
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.user);
  // const { login, logout } = useContext(AuthContext);
  const handleSubmit = () => {
    const uuid = generateRandomString(10);
    dispatch(user_auth(phoneNumber, uuid));
  };
  useEffect(() => {
    if (success) {
      navigation.navigate("OTPScreen");
    }
  }, [success, dispatch, navigation]);

  return (
    <View
      style={{ backgroundColor: "#2ac5ff" }}
      className="h-full bg-background-50"
    >
      <View className="h-3/6">
        <View className="flex-row items-center justify-center h-full">
          <View>
            <View className="mb-5">
              <Text className="text-white text-3xl font-semibold text-center">
                Welcome to
              </Text>
            </View>
            <View className="rounded-full bg-[#0d293c] p-5">
              <View className="p-3">
                <Image
                  source={require("../../assets/logo.png")}
                  style={{ width: 130, height: 130 }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="p-7">
        <View className="border bg-white border-gray-500 rounded-lg p-4 mb-5">
          {/* <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="IN"
              onChangeFormattedText={(text) => setPhoneNumber(text)}
              placeholder="Phone number"
              textContainerStyle={styles.textContainer}
            /> */}
        </View>
        {error && <Alert_ type={"error"} msg={error} />}
        <View className="min-w-16">
          <CustomButton
            title="Send OTP"
            color={"bg-black py-2 rounded-lg mt-5"}
            onPress={handleSubmit}
            loading={loading}
          />
        </View>
        <View className="mt-5 flex-row items-center justify-center">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <Text className="mx-2">OR</Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

        <View className="mt-5">
          <Text className="text-center">
            By Continuing, you agree to our Terms of Service Privacy Policy
            Content Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 0,
  },
});
