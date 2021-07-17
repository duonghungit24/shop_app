import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Cart from "./cart/Cart";
import Contact from "./contact/Contact";
import Home from "./Home/Home";
import Search from "./search/Search";

const height = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

export default function Shop({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          height: height / 8,
          backgroundColor: "yellow",
        }}
      >
        <TouchableOpacity
          style={{ marginTop: 20, marginLeft: 15 }}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="bars" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </View>
  );
}
