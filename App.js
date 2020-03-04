import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";

useScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "josefin-regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "josefin-bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "josefin-bold-italic": require("./assets/fonts/JosefinSans-BoldItalic.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
