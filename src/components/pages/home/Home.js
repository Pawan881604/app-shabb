import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Card from "../../common/site-card/Card";

import { useDispatch, useSelector } from "react-redux";
import { get_all_website } from "../../../api/webapi";
import Loader from "../../common/loader/Loader";
import useFooter from "../../../hooks/useFooter";
import useRefresh from "../../../hooks/useRefresh";
import usePagination from "../../../hooks/usePagination";

const Home = () => {
  const dispatch = useDispatch();
  const { web } = useSelector((state) => state.web);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  // Pagination state

  const { page, loadMoreData, loadingMore, setPage, setHasMore } =
    usePagination(get_all_website);
  const { onRefresh, refreshing } = useRefresh(
    setPage,
    setHasMore,
    get_all_website
  );

  const Footer = useFooter(loadingMore);

  useEffect(() => {
    if (isFirstLoad) {
      dispatch(get_all_website(page)).finally(() => setIsFirstLoad(false)); // Set isFirstLoad to false after data is loaded
    }
  }, [dispatch, page, isFirstLoad]);

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
      ListFooterComponent={Footer}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.9}
      refreshing={refreshing}
      onRefresh={onRefresh}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Home;
