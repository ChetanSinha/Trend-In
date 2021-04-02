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

import { Button, Fab, Icon, Left } from "native-base";

import styled from "styled-components";

import { FontAwesome } from "@expo/vector-icons";
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
      FabActive: false,
    });
  };

  render() {
    return (
      <>
        <View
          style={{
            paddingBottom: 15,
            paddingTop: 10,
            paddingRight: 5,
            paddingLeft: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            elevation: 5,
            backgroundColor: "#0B3861",
          }}
        >
          {/* <Ionicons name="md-arrow-back" size={24} /> */}
          <TextInput
            style={{ width: "85%", height: "120%", backgroundColor: "#e6e6e6" }}
            value={this.state.input.topic}
            placeholder=" Search Topics"
            onChangeText={this.handleInput}
          />

          <FontAwesome
            name="search"
            size={30}
            color="white"
            onPress={() =>
              this.state.input.topic !== "" &&
              this.props.navigation.navigate("SearchTopic", this.state.input)
            }
          />
        </View>

        <Container>
          <View style={styles.container}>
            {/* Render Button for General News */}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("General")}
              style={{ marginRight: 20 }}
            >
              <Image
                source={require("../images/general.jpeg")}
                style={{ width: 170, height: 110 }}
              />
              <Text
                style={{ color: "white", alignSelf: "center", padding: 10 }}
              >
                Global Breaking News
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("Reddit")}
              style={{ marginLeft: 20 }}
            >
              <Image
                source={require("../images/reddit.png")}
                style={{ width: 170, height: 110 }}
              />
              <Text
                style={{ color: "white", alignSelf: "center", padding: 10 }}
              >
                Sub Reddit
              </Text>
            </TouchableOpacity>
          </View>
          {/* Render Button for list wise specific news */}
          <FlatList
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            keyExtractor={(item) => item.id.toString()}
            data={this.state.specificSources}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("Specific", item)}
                style={styles.sources}
              >
                <Image
                  source={item.image}
                  style={{ width: 170, height: 110 }}
                />
                <Text
                  style={{ color: "white", alignSelf: "center", padding: 10 }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />

          {/* Render BookMarks */}
          <Fab
            direction="left"
            style={{ backgroundColor: "#2881e0" }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate("Bookmarks")}
          >
            <Ionicons name="bookmarks" size={100} />
          </Fab>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
  },
  sources: {
    margin: 20,
  },
});
