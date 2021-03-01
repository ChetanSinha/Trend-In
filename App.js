import { StatusBar } from "expo-status-bar";
import React from "react";

import { Text } from "native-base";

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
