import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "./HomeView";
import DetailProduct from "./detailProduct/DetailProduct";
import ListProducts from "./ListProducts/ListProducts";

const HomeStack = createStackNavigator();

export default function Home() {
  return (
    <HomeStack.Navigator initialRouteName="HomeView">
      <HomeStack.Screen
        name="HomeView"
        component={HomeView}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ListProducts"
        component={ListProducts}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}
