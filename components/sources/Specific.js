import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

import styled from "styled-components";

export default class Specific extends Component {
  render() {
    return (
      <>
        <View>
          <Text>{this.props.navigation.getParam("name")}</Text>
        </View>
      </>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background: teal;
  justify-content: center;
  align-items: center;
`;
