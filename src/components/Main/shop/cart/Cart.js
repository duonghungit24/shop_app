import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CartView from "./CartView";
import DetailProduct from "../Home/detailProduct/DetailProduct";

const CartStack = createStackNavigator();

export default function Cart() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="CartView"
        component={CartView}
        options={{
          headerShown: false,
        }}
      />
      <CartStack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{
          headerShown: false,
        }}
      />
    </CartStack.Navigator>
  );
}
