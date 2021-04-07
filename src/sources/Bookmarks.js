import React, { Component } from "react";
import { Alert, View, ActivityIndicator, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BookmarkDataItem from "../Renderers/BookmarkDataItem";
import Modal from "../Renderers/Modal";

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Title,
  Left,
  Body,
  Right,
  Button,
  Icon,
} from "native-base";

export default class Bookmarks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      setModalVisible: false,
      isLoading: true,
      modalArticleData: {},
    };
  }

  getBookmarks = async () => {
    try {
      const result = [];
      let keys;

      try {
        keys = await AsyncStorage.getAllKeys();
      } catch {
        throw new Error(400);
      }

      if (keys.length) {
        for (const key of keys) {
          const val = await AsyncStorage.getItem(key);
          result.push(JSON.parse(val));
        }
      }

      this.setState({
        data: result,
        isLoading: false,
      });
    } catch (e) {
      Alert.alert(
        "An error occured while adding, please try again after sometime"
      );
      console.log(e);
    }
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

  handleItemOnDelete = async (id) => {
    try {
      await AsyncStorage.removeItem(id);
      this.getBookmarks();
      Alert.alert("Bookmark deleted.");
    } catch (e) {
      Alert.alert("An error occured while adding, please try again later.");
      console.log(e);
    }
  };

  deleteAllBookmark = async () => {
    AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() => {
        Alert.alert("All bookmarks deleted.");
        this.getBookmarks();
      })
      .catch((error) => {
        Alert.alert("No bookmark to delete!");
      });
  };

  componentDidMount() {
    this.getBookmarks();
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
    ) : this.state.data.length ? (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return (
            <BookmarkDataItem
              key={randomId}
              onView={this.handleItemDataOnPress}
              onDelete={this.handleItemOnDelete}
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
        No Bookmarks found!
      </Text>
    );

    return (
      <Container>
        <Header style={{ backgroundColor: "#ffffff" }}>
          <Body>
            <Title style={{ color: "black", alignSelf: "center" }}>
              Your Bookmarks
            </Title>
          </Body>
          <Right>
            <Button transparent onPress={this.deleteAllBookmark}>
              <Text style={{ color: "black", fontSize: 20 }}>Delete All</Text>
            </Button>
          </Right>
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
