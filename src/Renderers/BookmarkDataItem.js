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
    this.props.onView({ url, title });
  };

  handleDelete = () => {
    this.props.onDelete(this.state.newsid);
  };

  validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  render() {
    const title = this.data.title;
    const isValidURL = this.validURL(this.data.urlToImage);

    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: isValidURL
                ? this.data.urlToImage
                : "https://iotcdn.oss-ap-southeast-1.aliyuncs.com/News-Image.jpg",
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
