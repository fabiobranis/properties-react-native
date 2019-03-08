"use strict";

import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import { StyleSheet, Text, View } from "react-native";

import SearchPage from "./SearchPage";
import SearchResults from "./SearchResults";

const AppNavigator = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults }
});

const App = createAppContainer(AppNavigator);
export default App;
