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
    console.log("topic", this.state.input.topic);
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
            backgroundColor: "#ffffff",
          }}
        >
          <TextInput
            style={{ width: "85%", height: "120%", backgroundColor: "#ffffff" }}
            value={this.state.topic}
            placeholder=" Search Topics"
            onChangeText={this.handleInput}
          />

          <FontAwesome
            name="search"
            size={30}
            color="black"
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
                source={require("../images/trendin.jpg")}
                style={{ width: 150, height: 110 }}
              />
              <Text
                style={{ color: "black", alignSelf: "center", padding: 10 }}
              >
                Trending Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("Reddit")}
              style={{ marginLeft: 20 }}
            >
              <Image
                source={require("../images/reddit.jpg")}
                style={{ width: 150, height: 110 }}
              />
              <Text
                style={{ color: "black", alignSelf: "center", padding: 10 }}
              >
                Reddit
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
                  style={{ width: 150, height: 110 }}
                />
                <Text
                  style={{ color: "black", alignSelf: "center", padding: 10 }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />

          {/* Render BookMarks */}
          <Fab
            direction="left"
            style={{ backgroundColor: "black" }}
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
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    marginBottom: 0,
  },
  sources: {
    margin: 20,
    marginBottom: -15,
  },
});
