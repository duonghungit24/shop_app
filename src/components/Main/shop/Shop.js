import React, { Component } from "react";
import { StyleSheet, View, Text, Button ,Dimensions} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./cart/Cart";
import Contact from "./contact/Contact";
import Home from "./Home/Home";
import Search from "./search/Search";

const  height  = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

export default function Shop({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height/8, backgroundColor:'red' }}>
        <Button
            title = "open menu"
            onPress={() => navigation.openDrawer()}
            style = {{marginTop:5}}
        />
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
