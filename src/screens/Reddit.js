import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import RedditTrends from "../sources/RedditTrends";

export default class Reddit extends Component {
  state = {
    input: {
      topic: "",
    },
  };

  handleInput = (inputTopic) => {
    this.setState({
      input: { topic: inputTopic.toLowerCase() },
      FabActive: false,
    });
  };

  render() {
    return (
      <>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            elevation: 5,
            backgroundColor: "white",
          }}
        >
          <TextInput
            style={{ width: "85%", backgroundColor: "#e6e6e6" }}
            value={this.state.input.topic}
            placeholder=" Search Subreddit"
            onChangeText={this.handleInput}
          />

          <FontAwesome
            name="search"
            size={24}
            color="black"
            onPress={() =>
              this.state.input.topic !== "" &&
              this.props.navigation.navigate("RedditTrends", this.state.input)
            }
          />
        </View>

        <RedditTrends />
      </>
    );
  }
}
