import React, { Component } from "react";
import {
  ScrollView,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
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

import { MaterialIcons } from "@expo/vector-icons";

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      newsid: this.getId(this.data),
    };
  }

  getId = (data) => {
    let ID;
    try {
      ID = Math.floor(
        (data.source.name.length / 23 +
          data.title.length / 61 +
          data.description.length / 127 +
          data.content.length / 149 +
          data.url.length / 47) *
          10000
      );
    } catch (e) {
      // console.log(data);
      ID = Math.floor(
        (data.source.name.length / 23 +
          data.title.length / 61 +
          (data.title.length * data.source.name.length) / 171 +
          data.url.length / 47) *
          10000
      );
    }
    ID = "id" + ID.toString();
    return ID;
  };

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onView({ url, title });
  };

  handleDelete = () => {
    this.props.onDelete(this.state.newsid);
  };

  render() {
    const title = this.data.title;

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
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>

        {/* Book Mark Option */}
        <Button
          transparent
          onPress={this.handleDelete}
          style={{ height: 30, width: 30, marginTop: 65, marginRight: 20 }}
        >
          <MaterialIcons name="delete" size={28} color="#2881e0" />
        </Button>
      </ListItem>
    );
  }
}
