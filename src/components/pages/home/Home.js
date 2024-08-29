import React, { useEffect } from "react";
import { ScrollView, View, RefreshControl } from "react-native";
import Card from "../../common/site-card/Card";
import useRefresh from "../../common/refresh/useRefresh";
import { useDispatch, useSelector } from "react-redux";
import { get_all_website } from "../../../api/webapi";
import Loader from "../../common/loader/Loader";
import { useTheme } from "../../../lib/Theme/ThemeContext";
const Home = () => {
  const dispatch = useDispatch();
  const { darkMode } = useTheme();
  const { loading, web, error } = useSelector((state) => state.web);
  const { refreshing, onRefresh } = useRefresh(2000, get_all_website, dispatch);
  useEffect(() => {
    dispatch(get_all_website());
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      className={darkMode ? "bg-black" : "mt-24 pr-2 bg-white"}
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="mb-16 px-2">
        <View className="mt-0">
          {Array.isArray(web) &&
            web.map((item, i) => <Card key={i} item={item} />)}
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
