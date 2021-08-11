import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions ,Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function CartView({ navigation, route }) {
  const {
    container,
    wrapProduct,
    checkout,
    img,
    nameText,
    iconUpDow,
    leftText,
    iconClose,
    sizeText,
    textTotal
  } = styles;
  const { imgUrl, name, price } = route.params;
  return (
    <View style={container}>
      <View style={wrapProduct}>
        <Image style={img} source={imgUrl} />
        <View style={{ marginLeft: 15, justifyContent: "space-around" }}>
          <Text style={nameText}>{name}</Text>
          <Text style={{ fontSize: 16 }}>{price}</Text>
          <View style={iconUpDow}>
            <Ionicons name="remove-circle-outline" color="#2a9d8f" size={25} />
            <Text style={{ margin: 5 }}>1</Text>
            <Ionicons name="add-circle-outline" color="#2a9d8f" size={25} />
          </View>
        </View>
        <View style={leftText}>
          <Ionicons style = {iconClose} name="close-circle-outline" color="#2a9d8f" size={25} />
          <Text style={sizeText}>Size M</Text>
        </View>
      </View>
      <View style={wrapProduct}></View>
      <View style={wrapProduct}></View>
      <View style={checkout}>
            <Text style = {textTotal}>Sub Total</Text>
            <Text style = {textTotal}>Shipping</Text>
            <Text>Total</Text>
            <Pressable>
                <Text>Proceed Checkout</Text>
            </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapProduct: {
    flexDirection: "row",
    height: height / 6,
    backgroundColor: "#fff",
    margin: 10,
    marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
    borderRadius:10,
  },
  img: {
    width: (width - 20) * 0.3,
    height: height / 6,
    resizeMode: "cover",
    borderRadius:10,
  },
  nameText: {
    fontSize: 18,
  },
  iconUpDow: {
    flexDirection: "row",
  },
  leftText : {
    position: "absolute",
    right : 0,
  },
  iconClose : {
    position: "absolute", 
    right :0,
  },
 sizeText: {
    position: "absolute",
    fontSize: 16,
    right : 10,
    bottom : -(height/6-10),
  },
  checkout: {
    justifyContent:"space-between",
    backgroundColor: "blue",
    margin: 10,
  },
  textTotal : {
    fontSize:18,
    padding:10
  },
});
