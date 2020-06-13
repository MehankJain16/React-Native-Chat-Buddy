import React, { useState, useEffect } from "react";
import { Routes } from "./Routes";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import io from "socket.io-client";

const loadAssets = () => {
  const socket = io("http://192.168.29.71:4000");
  return Font.loadAsync({
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "Microsoft-YaHei-Bold": require("./assets/fonts/Microsoft-YaHei-Bold.ttf"),
  });
};

const App = () => {
  const [isLoaded, setisLoaded] = useState(false);
  return isLoaded ? (
    <Routes />
  ) : (
    <AppLoading startAsync={loadAssets} onFinish={() => setisLoaded(true)} />
  );
};

export default App;
