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

import AsyncStorage from "@react-native-async-storage/async-storage";

import { FontAwesome } from "@expo/vector-icons";

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      bookmarkSelected: false,
      newsid: this.getId(this.data),
    };
  }

  getId = (data) => {
    let ID = 0;

    if (data.source.name) ID += data.source.name.length / 23;

    if (data.title) ID += data.title.length / 61;

    if (data.description) ID += data.description.length / 127;

    if (data.content) ID += data.content.length / 149;

    if (data.url) ID += data.url.length / 47;

    if (data.title && data.source.name)
      ID += (data.title.length * data.source.name.length) / 171;

    ID = Math.floor(ID * 1000);

    ID = "id" + ID.toString();

    return ID;
  };

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };

  AddBookmark = async () => {
    try {
      await AsyncStorage.setItem(this.state.newsid, JSON.stringify(this.data));
      Alert.alert("Added to Bookmarks.");
    } catch (e) {
      Alert.alert(
        "An error occured while adding, please try again after sometime"
      );
      console.log(e);
    }
  };

  removeBookmark = async () => {
    try {
      await AsyncStorage.removeItem(this.state.newsid);
      Alert.alert("Removed from bookmarks.");
    } catch (e) {
      Alert.alert(
        "An error occured while adding, please try again after sometime"
      );
      console.log(e);
    }
  };

  handleBookMark = () => {
    if (this.state.bookmarkSelected) {
      this.removeBookmark();
    } else {
      this.AddBookmark();
    }

    this.setState({
      bookmarkSelected: !this.state.bookmarkSelected,
    });
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
