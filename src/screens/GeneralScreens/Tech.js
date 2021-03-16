import React, { Component } from "react";
import { Alert, View, ActivityIndicator, Text, ScrollView } from "react-native";
import { getArticles } from "../../service/GetNews";
import DataItem from "../../Renderers/DataItem";
import Modal from "../../Renderers/Modal";

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

export default class ListThumbnailExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
      countryCode: this.props.country,
    };
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  componentDidMount() {
    getArticles("technology").then((data) => {
      this.setState({
        isLoading: false,
        data: data,
      });
    }),
      (error) => {
        Alert.alert("Error", "something went wrong!");
      };
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prev state country code", prevState.countryCode);
    // console.log("prev prop ", prevProps);
    // console.log("current prop", this.props.country);

    if (prevProps.country !== this.props.country) {
      getArticles("technology", this.props.country).then((data) => {
        this.setState({
          isLoading: false,
          data: data,
        });
      }),
        (error) => {
          Alert.alert("Error", "something went wrong!");
        };
    } else {
      console.log("same");
    }
  }

  render() {
    const randomId = Math.floor(
      ((Math.random() * 113) / 87 + (Math.random() * 299) / 189) * 1000
    );
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{ marginTop: 10 }}>Loading...</Text>
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
              isSpecific={false}
            />
          );
        }}
      />
    );
    return (
      <Container>
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
