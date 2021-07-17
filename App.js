import { StatusBar } from "expo-status-bar";
import React from "react";
import ShopApp from "./src/app"
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs()          //loại bỏ cảnh báo 


export default function App() {
  return (
    <ShopApp/>
  );
}

