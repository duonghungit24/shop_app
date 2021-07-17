import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

export default function Menu(props) {
  const gotoAuthenticaiton = () => {
    props.navigation.navigate("Authentication");
  };
  const gotoChangeInfor = () => {
    props.navigation.navigate("ChangeInfor");
  };
  const gotoOrderHistory = () => {
    props.navigation.navigate("OrderHistory");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem label="ChangeInfo" onPress={() => gotoChangeInfor()} />
        <DrawerItem
          label="Authentication"
          onPress={() => gotoAuthenticaiton()}
        />
        <DrawerItem label="OrderHistory" onPress={() => gotoOrderHistory()} />
      </DrawerContentScrollView>
    </View>
  );
}
