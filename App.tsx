import React, { useState } from "react";
import { Routes } from "./Routes";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const loadAssets = () => {
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
