import React, { useEffect } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { get_branch_details } from "../../../api/branchapi";
import useRefresh from "../../common/refresh/useRefresh";
import Loader from "../../common/loader/Loader";
import { FontAwesome } from "@expo/vector-icons";
import { Linking } from "react-native";
const Branch = () => {
  const dispatch = useDispatch();
  const { loading, branch, error } = useSelector((state) => state.branch);
  const { refreshing, onRefresh } = useRefresh(
    2000,
    get_branch_details,
    dispatch
  );
  useEffect(() => {
    dispatch(get_branch_details());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  const handlePress = (link) => {
    Linking.openURL(link);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      className={"mt-24 pr-2 "}
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="p-3 mb-16">
        <View>
          <Text className="text-2xl text-center font-medium">My Branch</Text>
        </View>
        <View className="mt-10 bg-white p-5 rounded-xl shadow-lg">
          <View className="flex-row gap-4 flex-wrap">
            {Array.isArray(branch) &&
              branch.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => handlePress(item.link)}
                >
                  <View className="bg-50 px-4 py-3 rounded-full shadow-2xl">
                    <FontAwesome name="whatsapp" size={42} color="#fff" />
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Branch;
