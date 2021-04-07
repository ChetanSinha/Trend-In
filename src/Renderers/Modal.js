import React, { Component } from "react";
import { Dimensions, Modal, Share, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Title,
  Button,
  View,
} from "native-base";

import { Ionicons } from "@expo/vector-icons";

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  handleShare = () => {
    const { url, title } = this.props.articleData;
    const message = `${title}\n\nRead More at ${url}\n\nShared via Fresh Off the World :D`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
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
    const { showModal, articleData } = this.props;
    const { url } = articleData;

    const isValidURL = this.validURL(url);

    if (isValidURL) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container
            style={{ margin: 15, marginBottom: 0, backgroundColor: "#fff" }}
          >
            <Header style={{ backgroundColor: "#fff" }}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{ color: "black", fontSize: 24 }} />
                </Button>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{ color: "#000" }}
                ></Title>
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Ionicons
                    name="md-share-social-outline"
                    size={24}
                    color="black"
                  />
                </Button>
              </Right>
            </Header>
            {/* <View> */}
            <Content contentContainerStyle={{ flex: 1 }}>
              <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onError={this.handleClose}
                startInLoadingState
                scalesPageToFit
              />
            </Content>
            {/* </View> */}
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
