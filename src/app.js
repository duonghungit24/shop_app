import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Authentication from "./components/Authentication/Authentication";
import OrderHistory from "./components/OrderHistory";
import ChangeInfor from "./components/ChangeInfor";
import Main from "./components/Main/Main";

const App = createStackNavigator();

export default function ShopApp() {
  return (
    <>
      <NavigationContainer style = {styles.container}>
        <App.Navigator initialRouteName="Main">
          <App.Screen name="Main" 
            component={Main}   
            options={{
                headerShown: false
             }} 
            />
          <App.Screen name="Authentication" component={Authentication} />
          <App.Screen name="OrderHistory" component={OrderHistory} />
          <App.Screen name="ChangeInfor" component={ChangeInfor} />
        </App.Navigator>
      </NavigationContainer>
      <StatusBar style="hidden" />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
