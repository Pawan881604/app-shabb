import React, { useCallback, useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import Card from "../../common/site-card/Card";
import useRefresh from "../../common/refresh/useRefresh";
import { useDispatch, useSelector } from "react-redux";
import { get_all_website } from "../../../api/webapi";
import Loader from "../../common/loader/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { web } = useSelector((state) => state.web);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  // Pagination state
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const newPage = 1;
      setPage(newPage); // Reset page to 1
      setHasMore(true); // Reset hasMore to true
      await dispatch(get_all_website(newPage, true));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setRefreshing(false); // Stop refreshing whether the fetch succeeds or fails
    }
  };

  useEffect(() => {
    if (isFirstLoad) {
      dispatch(get_all_website(page)).finally(() => setIsFirstLoad(false)); // Set isFirstLoad to false after data is loaded
    }
  }, [dispatch, page, isFirstLoad]);

  const loadMoreData = useCallback(async () => {
    if (!loadingMore && hasMore) {
      console.log('click')
      setLoadingMore(true); // Set loadingMore to true when loading starts
      const nextPage = page + 1;
      console.log(nextPage)
      try {
        const result = await dispatch(get_all_website(nextPage, false)); // Fetch next page of data
        if (result.web_data.length > 0) {
          setPage(nextPage);
        } else {
          setHasMore(false); // No more data to load
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoadingMore(false); // Set loadingMore to false when loading ends
    }
  }, [loadingMore, hasMore, page, dispatch]);

  const renderFooter = () => {
    return loadingMore ? (
      <View style={{ padding: 20 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  };

  const renderItem = ({ item }) => {
    return <Card item={item} />;
  };

  if (isFirstLoad) {
    return <Loader />; // Show loader only on initial load
  }
  return (
    <FlatList
      data={web}
      className="my-20"
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={renderFooter}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.9} // Trigger loading more data when 90% down the list
      refreshing={refreshing}
      onRefresh={onRefresh}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Home;
