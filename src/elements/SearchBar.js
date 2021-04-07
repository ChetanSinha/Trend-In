import React, { Component } from "react";
import { View, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default class SearchBarExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        topic: "",
      },
    };
  }

  handleInput = (inputTopic) => {
    this.setState({
      input: { topic: inputTopic.toLowerCase() },
    });
  };

  render() {
    console.log(this.state.input.topic);
    return (
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor: "white",
        }}
      >
        {/* <Ionicons name="md-arrow-back" size={24} /> */}
        <TextInput
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          value={this.state.input.topic}
          placeholder=" Search Topics"
          onChangeText={this.handleInput}
        />
        <Ionicons
          name="md-send"
          size={24}
          onPress={() =>
            this.props.navigation.navigate("SearchTopic", this.state.input)
          }
        />
      </View>
    );
  }
}
