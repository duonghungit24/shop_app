import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");
const imageList = [
  {
    id: 1,
    name: "Áo Rabbit",
    price: "150.000 VND",
    url: require("../../../../media/ao1.jpg"),
  },
  {
    id: 2,
    name: "Áo Gấu 3D",
    price: "250.000 VND",
    url: require("../../../../media/ao2.jpg"),
  },
  {
    id: 3,
    name: "Áo Khủng Long",
    price: "300.000 VND",
    url: require("../../../../media/ao3.jpg"),
  },
  {
    id: 4,
    name: "Áo LAY GAMES",
    price: "250.000 VND",
    url: require("../../../../media/ao4.jpg"),
  },
  {
    id: 5,
    name: "Áo Dis Out",
    price: "200.000 VND",
    url: require("../../../../media/ao5.jpg"),
  },
  {
    id: 6,
    name: "Áo Summer",
    price: "150.000 VND",
    url: require("../../../../media//ao6.jpg"),
  },
  {
    id: 7,
    name: "Áo YOUR3",
    price: "100.000 VND",
    url: require("../../../../media/ao7.jpg"),
  },
  {
    id: 8,
    name: "Áo Real Good",
    price: "150.000 VND",
    url: require("../../../../media/ao8.jpg"),
  },
];

export default function TopProducts({ navigation }) {
  const { container, title, img, wrapTitle, bodyImg, wrapImg } = styles;
  return (
    <View style={container}>
      <View style={wrapTitle}>
        <Text style={title}>Top Products</Text>
      </View>
      <View style={bodyImg}>
        {imageList.map((e, i) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailProduct" , {
              imgId : e.id,
              imgUrl : e.url,
              name:e.name,
              price:e.price
            })}
          >
            <View style={wrapImg}>
              <Image key={e} style={img} source={e.url} />
              <Text>{e.name}</Text>
              <Text>{e.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const widthImage = (width - 50) / 2;
const heightImage = (widthImage / 600) * 800;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  bodyImg: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 20,
  },
  wrapTitle: {
    height: 40,
  },
  wrapImg: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0,
    shadowRadius: 1.4,
    elevation: 1.5,
    marginTop: 10,
  },
  img: {
    width: widthImage,
    height: heightImage,
  },
});
