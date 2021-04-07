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

  renderTabBar = (props) => {
    props.tabStyle = Object.create(props.tabStyle);
    return <ScrollableTab {...props} />;
  };

  render() {
    return (
      <>
        <Container>
          <Header style={{ backgroundColor: "#ffffff" }} hasTabs>
            <Left />
            <Body>
              <Title style={{ color: "black" }}>Trending News</Title>
            </Body>
            <Left />
            <Right>
              <Container style={{ height: "20%" }}>
                <Picker onPick={this.handleCountryPicker} />
              </Container>
            </Right>
          </Header>

          <Tabs
            renderTabBar={this.renderTabBar}
            tabBarUnderlineStyle={{ backgroundColor: "black" }}
          >
            <Tab
              tabStyle={{ backgroundColor: "#ffffff" }}
              activeTabStyle={{ backgroundColor: "#ffffff" }}
              textStyle={{ color: "black" }}
              activeTextStyle={{ color: "black" }}
              heading="General"
            >
              <BreakingNews country={this.state.countryCode} />
            </Tab>

            <Tab
              tabStyle={{ backgroundColor: "#ffffff" }}
              activeTabStyle={{ backgroundColor: "#ffffff" }}
              textStyle={{ color: "black" }}
              activeTextStyle={{ color: "black" }}
              heading="Business"
            >
              <Business country={this.state.countryCode} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#ffffff" }}
              activeTabStyle={{ backgroundColor: "#ffffff" }}
              textStyle={{ color: "black" }}
              activeTextStyle={{ color: "black" }}
              heading="Technology"
            >
              <Tech country={this.state.countryCode} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#ffffff" }}
              activeTabStyle={{ backgroundColor: "#ffffff" }}
              textStyle={{ color: "black" }}
              activeTextStyle={{ color: "black" }}
              heading="Sports"
            >
              <Sports country={this.state.countryCode} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#ffffff" }}
              activeTabStyle={{ backgroundColor: "#ffffff" }}
              textStyle={{ color: "black" }}
              activeTextStyle={{ color: "black" }}
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
