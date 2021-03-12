import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"

import MealsNavigator from "./navigation/MealsNavigator"

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={() =>
          Font.loadAsync({
            "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
            "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf")
          })
        }
        onFinish={() => setFontLoaded(true)}
        onError={error => console.log(error)}
      />
    )
  }
  return <MealsNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
