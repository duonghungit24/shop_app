import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";

const { height, width } = Dimensions.get("window");

export default function LocalBrand() {
  const { wrapper, textWrap, img, imgWrap, text } = styles;
  return (
    <View style={wrapper}>
      <View style={textWrap}>
        <Text style={text}>Local Brand</Text>
      </View>
      <View style={imgWrap}>
        <Image
          style={img}
          source={require("../../../../media/localband.jpg")}
        />
      </View>
    </View>
  );
}

const heigtImage = (height / 2000) * 500;
const widthImage = width - 40;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.34,
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  textWrap: {
    flex: 1,
  },
  imgWrap: {
    flex: 4,
  },
  img: {
    height: heigtImage,
    width: widthImage,
  },
});
