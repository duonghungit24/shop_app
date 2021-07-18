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
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Shop"
        drawerContent = {props => <Menu {...props}/>}
        drawerType={"front"}
        overlayColor="0.5"
        drawerStyle={{
          backgroundColor: "#edf6f9",
          width: "60%",
        }}
      >
        <Drawer.Screen name="Shop" component={Shop} />
      </Drawer.Navigator>
    </>
  );
}
