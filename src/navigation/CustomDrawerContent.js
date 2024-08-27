import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  const currentRoute = props.state.routeNames[props.state.index];
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {currentRoute !== "Tabs" && <DrawerItemList {...props} />}

        <TouchableOpacity onPress={() => props.navigation.navigate("Websites")}>
          <Text style={styles.item}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    paddingLeft: 20,
  },
  item: {
    fontSize: 18,
    margin: 20,
  },
});

export default CustomDrawerContent;
