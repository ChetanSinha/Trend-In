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
import SourceList from "../sources/sourceList";

export default class MainScreen extends Component {
  state = {
    specificSources: SourceList,
  };

  render() {
    return (
      <>
        <SearchBar />
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
            <Text style={{ color: "white" }}>Breaking News in India</Text>
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
