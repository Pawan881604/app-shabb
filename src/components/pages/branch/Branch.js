import React, { useEffect, useState } from "react";
import {
  FlatList,
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
  const { loading, branch, error, resultPerpage } = useSelector(
    (state) => state.branch
  );
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    dispatch(get_branch_details(page));
  }, [dispatch, page]);

  const handlePress = (link) => {
    Linking.openURL(link);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.link)}>
      <View className="bg-50 px-4 py-3 rounded-full shadow-2xl">
        <FontAwesome name="whatsapp" size={42} color="#fff" />
      </View>
    </TouchableOpacity>
  );
  const loadMore = () => {
    if (!loading && web.length % resultPerpage === 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const refreshList = () => {
    setRefreshing(true); // Start the refreshing state
    setPage(1); // Reset page to 1
    dispatch(get_branch_details(1, true)) // Fetch the first page with refresh flag
      .finally(() => setRefreshing(false)); // Stop the refreshing state after fetch
  };

  if (loading && page === 1) {
    return <Loader />;
  }
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  return (
    <View className="p-3 my-20">
      <View >
        <Text className="text-2xl text-center font-medium">My Branch</Text>
      </View>
      <View className="mt-10 bg-white p-5 rounded-xl shadow-lg">
        <FlatList
          data={branch}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          onEndReached={loadMore} // Delegate to usePagination
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter} // Use the hook's Footer component
          refreshing={refreshing} // Corrected: boolean value
          onRefresh={refreshList} // Corrected: the function to refresh
        />
      </View>
    </View>
  );
};

export default Branch;
