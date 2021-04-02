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

import Picker from "../elements/Picker";

export default class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryCode: "in",
    };
  }

  handleCountryPicker = (countryCode) => {
    this.setState({
      countryCode,
    });
  };

  render() {
    console.log(this.state.countryCode);
    return (
      <>
        <Container>
          <Header style={{ backgroundColor: "#0B3861" }} hasTabs>
            <Left />
            <Body>
              <Title style={{ color: "white" }}>Breaking News 🌏</Title>
            </Body>
            <Left />
            <Right>
              <Container style={{ height: "20%" }}>
                <Picker onPick={this.handleCountryPicker} />
              </Container>
            </Right>
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
              <BreakingNews country={this.state.countryCode} />
            </Tab>

            <Tab
              tabStyle={{ backgroundColor: "#0B3861" }}
              activeTabStyle={{ backgroundColor: "#0B3861" }}
              textStyle={{ color: "white" }}
              activeTextStyle={{ color: "white" }}
              heading="Business"
            >
              <Business country={this.state.countryCode} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#0B3861" }}
              activeTabStyle={{ backgroundColor: "#0B3861" }}
              textStyle={{ color: "white" }}
              activeTextStyle={{ color: "white" }}
              heading="Technology"
            >
              <Tech country={this.state.countryCode} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#0B3861" }}
              activeTabStyle={{ backgroundColor: "#0B3861" }}
              textStyle={{ color: "white" }}
              activeTextStyle={{ color: "white" }}
              heading="Sports"
            >
              <Sports country={this.state.countryCode} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#0B3861" }}
              activeTabStyle={{ backgroundColor: "#0B3861" }}
              textStyle={{ color: "white" }}
              activeTextStyle={{ color: "white" }}
              heading="Health Care"
            >
              <Health country={this.state.countryCode} />
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  }
}
