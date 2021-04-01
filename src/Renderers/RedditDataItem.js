import React, { Component } from "react";
import { ScrollView, View, FlatList, Alert } from "react-native";

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

export default class RedditDataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };

  render() {
    return (
      <>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri:
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-YfG0LGJ5Nz8%2FWjmFJSmsJvI%2FAAAAAAAAKWg%2F0JrUjgOp2o8MJXDnBOHsKC9uTk41EynaQCLcBGAs%2Fs1600%2FsdO8tAw.png&f=1&nofb=1",
              }}
            />
          </Left>
          <Body>
            <Text>{this.data.title}</Text>

            <Text note numberOfLines={2}>
              {this.data.selftext}
            </Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={this.handlePress}
              style={{ height: 30 }}
            >
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </>
    );
  }
}
