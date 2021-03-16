import React, { Component } from "react";
import { ScrollView, View, FlatList } from "react-native";
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

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
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
                  : "https://www.downbeach.com/wp-content/uploads/2019/01/Breaking-News.jpg",
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
      </ListItem>
    );
  }
}
