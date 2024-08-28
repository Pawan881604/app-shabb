import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View className="w-full flex-1 flex-row">
      <TextInput
        className="w-full bg-white px-4 h-12 rounded-full border-white border"
        placeholder="Search..."
        placeholderTextColor="#ccc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "140%",
  },
  input: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 5,
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
  },
});

export default SearchBar;
