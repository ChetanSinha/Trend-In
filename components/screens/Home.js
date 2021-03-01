import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components";

import SearchBar from "../elements/SearchBar";

export default class MainScreen extends Component {
  state = {
    specificSources: [
      {
        id: 1,
        name: "bbc",
        image: require("../images/bbc.png"),
      },
      {
        id: 2,
        name: "times now",
        image: require("../images/timesnow.png"),
      },
      {
        id: 3,
        name: "the hindu",
        image: require("../images/thehindu.jpg"),
      },
    ],
  };

  render() {
    return (
      <>
        <SearchBar />
        <Container>
          <Text>Hello from home</Text>

          {/* Render Button for General News */}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("General")}
          >
            <Image
              source={require("../images/general.jpeg")}
              style={{ width: 150, height: 100 }}
            />
            <Text>General Breaking News</Text>
          </TouchableOpacity>

          {/* Render Button for list wise specific news */}
          <FlatList
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
                <Text>{item.name}</Text>
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
  background: teal;
  justify-content: center;
  align-items: center;
`;
