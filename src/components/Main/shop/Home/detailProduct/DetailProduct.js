import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const listData = [
  {
    id: 1,
    name: "Áo",
    price: 50,
    listImg: [
      { url: require("../../../../../media/ao1.jpg") },
      { url: require("../../../../../media/ao1.jpg") },
      { url: require("../../../../../media/ao1.jpg") },
      { url: require("../../../../../media/ao1.jpg") },
      { url: require("../../../../../media/ao1.jpg") },
    ],
  },
];

export default function DetailProduct({ navigation }) {
  const [active, setActive] = useState(false);
  const { container, body, header, iconStyle } = styles;
  const goback = () => {
    navigation.goBack();
  };
  const goToCart = () => {
    navigation.navigate("Cart");
    setActive(true);
  };
  return (
    <View style={container}>
      <View style={header}>
        <Pressable onPress={goback}>
          <Ionicons name="arrow-back" color="#2a9d8f" size={30} />
        </Pressable>
        <Pressable onPress={goToCart}>
          <Ionicons
            name={active ? "cart" : "cart-outline"}
            style={iconStyle}
            color="#2a9d8f"
            size={30}
          />
        </Pressable>
      </View>
      <View style={body}>
        <View style={{ flex: 1, backgroundColor: "red" }}>
            {/* <ScrollView>
                {listData.listImg.map((img,index) => (
                    <View><Text>hehe</Text></View>
                ))}
            </ScrollView> */}
        </View>
        <View style={{ flex: 2, backgroundColor: "blue" }}></View>
      </View>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconStyle: {
    fontSize: 25,
  },
  body: {
    height: 500,
    flexDirection: "row",
  },
});
