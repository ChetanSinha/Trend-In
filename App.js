import { StatusBar } from "expo-status-bar";
import React from "react";

import { Text } from "native-base";

import { LogBox } from "react-native";

// native base requirements
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

// Navigator
import Navigator from "./routes/HomeStack";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreLogs([
      "VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.",
    ]);
    if (!this.state.isReady) {
      return <Text>Loading...</Text>;
    }

    return (
      <>
        <Navigator />
      </>
    );
  }
}
