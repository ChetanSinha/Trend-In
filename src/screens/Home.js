import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import SourceList from "../sources/sourceList";

export default class MainScreen extends Component {
  state = {
    specificSources: SourceList,
    input: {
      topic: "",
    },
  };

  handleInput = (inputTopic) => {
    this.setState({
      input: { topic: inputTopic.toLowerCase() },
    });
  };

  render() {
    console.log(this.state.input.topic);
    return (
      <>
        {/* <SearchBar /> */}

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

        <Container>
          {/* Render Button for General News */}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("General")}
          >
            <Image
              source={require("../images/general.jpeg")}
              style={{ width: 150, height: 100 }}
            />
            <Text style={{ color: "white" }}>Breaking News</Text>
          </TouchableOpacity>

          {/* Render Button for list wise specific news */}
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            data={this.state.specificSources}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("Specific", item)}
              >
                <Image
                  source={item.image}
                  style={{ width: 150, height: 100 }}
                />
                <Text style={{ color: "white" }}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </Container>
      </>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #0b3861;
  justify-content: center;
  align-items: center;
`;
