import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import {
  Container,
  Header,
  Content,
  ScrollableTab,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
} from "native-base";

import styled from "styled-components";

// Import tabs:
import BreakingNews from "../screens/GeneralScreens/BreakingNews";
import Business from "../screens/GeneralScreens/Business";
import Tech from "../screens/GeneralScreens/Tech";
import Sports from "../screens/GeneralScreens/Sports";
import Health from "../screens/GeneralScreens/Health";

export default class General extends Component {
  render() {
    const source = this.props.navigation.getParam("name") | "news_api";

    return (
      <>
        <Container>
          <Header style={{ backgroundColor: "#0B3861" }} hasTabs>
            <Left />
            <Body>
              <Title style={{ color: "white" }}>Breaking News</Title>
            </Body>
            <Left />
          </Header>

          <Tabs
            renderTabBar={() => <ScrollableTab />}
            tabBarUnderlineStyle={{ backgroundColor: "white" }}
          >
            <Tab
              tabStyle={{ backgroundColor: "#0B3861" }}
              activeTabStyle={{ backgroundColor: "#0B3861" }}
              textStyle={{ color: "white" }}
              activeTextStyle={{ color: "white" }}
              heading="General"
            >
              <BreakingNews source={source} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#0B3861" }}
              activeTabStyle={{ backgroundColor: "#0B3861" }}
              textStyle={{ color: "white" }}
              activeTextStyle={{ color: "white" }}
              heading="Business"
            >
              <Business source={source} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#0B3861" }}
              activeTabStyle={{ backgroundColor: "#0B3861" }}
              textStyle={{ color: "white" }}
              activeTextStyle={{ color: "white" }}
              heading="Technology"
            >
              <Tech source={source} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#0B3861" }}
              activeTabStyle={{ backgroundColor: "#0B3861" }}
              textStyle={{ color: "white" }}
              activeTextStyle={{ color: "white" }}
              heading="Sports"
            >
              <Sports source={source} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#0B3861" }}
              activeTabStyle={{ backgroundColor: "#0B3861" }}
              textStyle={{ color: "white" }}
              activeTextStyle={{ color: "white" }}
              heading="Health Care"
            >
              <Health source={source} />
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  }
}
