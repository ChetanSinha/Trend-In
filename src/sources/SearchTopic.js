import React, { Component } from "react";
import { Alert, View, ActivityIndicator, Text, ScrollView } from "react-native";

import { getArticles } from "../service/GetTopicResults";
import DataItem from "../Renderers/DataItem";
import Modal from "../Renderers/Modal";

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Title,
  Body,
  Right,
  Button,
} from "native-base";

export default class SearchTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: this.props.navigation.getParam("topic"),
      isLoading: true,
      data: [],
      setModalVisible: false,
      modalArticleData: {},
    };
  }

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
      this.setState({
        isLoading: false,
        data: data,
      });
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
            <DataItem
              key={randomId}
              onPress={this.handleItemDataOnPress}
              data={item}
              isSpecific={true}
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
        <Header style={{ backgroundColor: "#ffffff" }}>
          <Body>
            <Title style={{ color: "black", alignSelf: "center" }}>
              Showing Trendings for:{" "}
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
