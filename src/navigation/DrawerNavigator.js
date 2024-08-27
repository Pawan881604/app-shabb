import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import CustomDrawerContent from "./CustomDrawerContent";
import CustomHeaderButton from "./CustomHeaderButton";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerLeft: () => <CustomHeaderButton />,
        headerTitle: "",

        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTransparent: true,
      })}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
