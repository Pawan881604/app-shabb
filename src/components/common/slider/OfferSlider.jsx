import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(TouchableOpacity);

export default function OfferSlider() {
  return (
    <View>
      <Swiper
        autoplay={true}
        autoplayTimeout={3}
        showsButtons={true}
        className="max-h-36"
        nextButton={
          <StyledTouchableOpacity className="none">
            {/* <Text style={styles.buttonText}>›</Text> */}
          </StyledTouchableOpacity>
        }
        prevButton={
          <StyledTouchableOpacity className="none">
            {/* <Text style={styles.buttonText}>‹</Text> */}
          </StyledTouchableOpacity>
        }
      >
        <View className="flex-1 justify-center items-center bg-gray-100 h-40">
          <Image
            className="w-full h-40"
            resizeMode="cover"
            source={require("../../../../assets/images/Grey White Clean Special Offer Discount Banner Landscape (2).png")}
            //   style={styles.reactLogo}
          />
        </View>
        <View className="flex-1 justify-center items-center bg-gray-100 h-40">
          <Image
            className="w-full h-40"
            resizeMode="cover"
            source={require("../../../../assets/images/Purple Black Modern Streetwear Sale Promotion Medium Banner.png")}
            //   style={styles.reactLogo}
          />
        </View>
        <View className="flex-1 justify-center items-center bg-gray-100 h-40">
          <Image
            className="w-full h-40"
            resizeMode="cover"
            source={require("../../../../assets/images/Purple Black Modern Streetwear Sale Promotion Medium Banner.png")}
            //   style={styles.reactLogo}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});
