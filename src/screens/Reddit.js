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
    topic: "",
    input: {
      topic: "",
    },
  };

  handleInput = (inputTopic) => {
    this.setState({
      topic: inputTopic,
      input: { topic: inputTopic.toLowerCase() },
      FabActive: false,
    });
  };

  render() {
    return (
      <>
        <RedditTrends />
        <View
          style={{
            paddingBottom: 15,
            paddingTop: 10,
            paddingRight: 5,
            paddingLeft: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            elevation: 5,
            backgroundColor: "#fff",
          }}
        >
          <TextInput
            style={{ width: "85%", height: "130%", backgroundColor: "#fff" }}
            value={this.state.topic}
            placeholder=" Search Subreddit"
            onChangeText={this.handleInput}
          />

          <FontAwesome
            name="search"
            size={30}
            color="black"
            onPress={() =>
              this.state.input.topic !== "" &&
              this.props.navigation.navigate("RedditTrends", this.state.input)
            }
          />
        </View>
      </>
    );
  }
}
