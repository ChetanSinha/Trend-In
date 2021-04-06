import React, { Component } from "react";
import { Alert, View, ActivityIndicator, Text, ScrollView } from "react-native";

import { getArticles } from "../service/GetReddit";
import RedditDataItem from "../Renderers/RedditDataItem";
import Modal from "../Renderers/Modal";

import {
  Container,
  Header,
  Content,
  List,
  Title,
  Right,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Button,
} from "native-base";

export default class SearchTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: this.getTopic(),
      isLoading: true,
      data: [],
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  getTopic = () => {
    let topic;
    try {
      topic = this.props.navigation.getParam("topic");
    } catch (err) {
      topic = "trending";
    }

    return topic;
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };

  componentDidMount() {
    getArticles(this.state.topic).then((data) => {
      if (data) {
        this.setState({
          isLoading: false,
          data: data,
        });
      }
    }),
      (error) => {
        Alert.alert("Error", "something went wrong!");
      };
  }

  render() {
    const randomId = Math.floor(
      ((Math.random() * 113) / 87 + (Math.random() * 299) / 189) * 1000
    );
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text
          style={{
            alignContent: "center",
            justifyContent: "center",
            flex: 1,
            padding: 100,
            marginTop: 100,
            marginLeft: 90,
          }}
        >
          Loading...
        </Text>
      </View>
    ) : this.state.data.length > 0 ? (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return (
            <RedditDataItem
              key={randomId}
              onPress={this.handleItemDataOnPress}
              data={item.data}
            />
          );
        }}
      />
    ) : (
      <Text
        style={{
          alignContent: "center",
          justifyContent: "center",
          flex: 1,
          padding: 100,
          marginTop: 100,
          marginLeft: 30,
        }}
      >
        Sorry! No Results Found :(
      </Text>
    );
    return (
      <Container>
        <Header style={{ backgroundColor: "#0B3861" }}>
          <Body>
            <Title style={{ color: "white", alignSelf: "center" }}>
              Showing Subreddit:{" "}
              {this.state.topic.toUpperCase()[0] +
                this.state.topic.toLowerCase().slice(1)}
            </Title>
          </Body>
        </Header>
        <Content>{view}</Content>
        <Modal
          key={randomId}
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
