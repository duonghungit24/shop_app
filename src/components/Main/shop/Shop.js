import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Ionicons } from "@expo/vector-icons";
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
          height: height / 6,
          padding:10,
          backgroundColor: "#2a9d8f",
          justifyContent:'space-around'
        }}
      >
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <TouchableOpacity
            style={{ marginTop: 30, marginLeft: 5 }}
            onPress={() => navigation.openDrawer()}
          >
            <Icon name="bars" size={30} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{ position: "absolute", top: 30, right: 150, fontSize: 20 , color:'#fff' }}
          >
            Men Shop
          </Text>
        </View>
        <TextInput
          style = {{height: height/24, backgroundColor:'#fff' , padding: 5,marginLeft:5, marginRight:5, borderRadius:3}}
          placeholder = "Tìm kiếm sản phẩm"
        />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === "Cart") {
              return (
                <Ionicons
                  name={focused ? "cart" : "cart-outline"}
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === "Search") {
              return (
                <Ionicons
                  name={focused ? "search" : "search-outline"}
                  size={size}
                  color={color}
                />
              );
            }

            if (route.name === "Contact") {
              return (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#2a9d8f",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </View>
  );
}
