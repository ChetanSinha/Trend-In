import React, { Component } from "react";
import { Alert, View, ActivityIndicator, Text, ScrollView } from "react-native";

import { getArticles } from "../service/GetSpecificNews";
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

export default class Specific extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.navigation.getParam("name"),
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  getName = (source) => {
    const sourceName = source.split("-");

    const newSource = sourceName.map((item) => {
      return item.toUpperCase()[0] + item.toLowerCase().slice(1);
    });

    return newSource.join(" ");
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
    getArticles(this.state.source).then((data) => {
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
    const sourceName = this.getName(this.state.source);

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
    ) : (
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
    );
    return (
      <Container>
        <Header style={{ backgroundColor: "#ffffff" }}>
          <Body>
            <Title style={{ color: "black", alignSelf: "center" }}>
              Trendings from: {sourceName}
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
