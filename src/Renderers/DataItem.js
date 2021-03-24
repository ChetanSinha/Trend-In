import React, { Component } from "react";
import { ScrollView, View, FlatList, Alert } from "react-native";
import TimeAgo from "./TimeAgo";

import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
  Button,
  Container,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { ThemeConsumer } from "styled-components";

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      bookmarkSelected: false,
    };
  }

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };

  handleBookMark = () => {
    this.setState({
      bookmarkSelected: !this.state.bookmarkSelected,
    });

    Alert.alert("Added to bookmark");
  };

  render() {
    let title;
    if (this.props.isSpecific) {
      title = this.data.title;
    } else {
      title = this.data.title.split("-");
      title.pop();
    }

    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : "https://i.pinimg.com/originals/d1/a6/2a/d1a62a6d8969170025f279115470e34b.jpg",
            }}
          />
        </Left>
        <Body>
          {this.props.isSpecific ? (
            <Text>{title}</Text>
          ) : (
            <Text>{title.join(" ")}</Text>
          )}

          <Text note numberOfLines={3}>
            {this.data.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 8,
              marginLeft: 0,
            }}
          >
            <Text note>{this.data.source.name}</Text>
            <TimeAgo time={this.data.publishedAt} />
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress} style={{ height: 30 }}>
            <Text>View</Text>
          </Button>
        </Right>
        {/* Book Mark Option */}
        {this.state.bookmarkSelected ? (
          <Button
            transparent
            onPress={this.handleBookMark}
            style={{ height: 20, width: 20, marginTop: 15, marginRight: 15 }}
          >
            <FontAwesome name="bookmark" size={28} color="#2881e0" />
          </Button>
        ) : (
          <Button
            transparent
            onPress={this.handleBookMark}
            style={{ height: 20, width: 20, marginTop: 15, marginRight: 15 }}
          >
            <FontAwesome name="bookmark-o" size={28} color="#2881e0" />
          </Button>
        )}
      </ListItem>
    );
  }
}
