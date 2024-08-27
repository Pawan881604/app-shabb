import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomHeaderButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={styles.button}
    >
      <Text style={styles.buttonText}>menu</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 24, // Customize the size of the icon
  },
});

export default CustomHeaderButton;
