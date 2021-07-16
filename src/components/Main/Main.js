import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Menu from "./Menu";
import Shop from "./shop/Shop";
import Authentication from "../Authentication/Authentication";
import ChangeInfor from "../ChangeInfor";
import OrderHistory from "../OrderHistory";

const Drawer = createDrawerNavigator();

export default function Main({ navigation }) {
  const gotoAuthenticaiton = () => {
    navigation.navigate("Authentication");
  };
  const gotoChangeInfor = () => {
    navigation.navigate("ChangeInfor");
  };
  const gotoOrderHistory = () => {
    navigation.navigate("OrderHistory");
  };
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Shop"
        drawerType={"front"}
        overlayColor="0.5"
        drawerStyle={{
          backgroundColor: "#c6cbef",
          width: "60%",
        }}
      >
        <Drawer.Screen name="Shop" component={Shop} />
        <Drawer.Screen name="ChangeInfor" component={ChangeInfor} />
        <Drawer.Screen name="Authentication" component={Authentication} />
        <Drawer.Screen name="OrderHistory" component={OrderHistory} />
      </Drawer.Navigator>
    </>
  );
}
