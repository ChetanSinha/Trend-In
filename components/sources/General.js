import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

import styled from "styled-components";

export default class General extends Component {
  render() {
    return (
      <>
        <Container>
          <Text> Hello from general source </Text>
          <Button
            title="specific sources"
            onPress={() => this.props.navigation.navigate("Specific")}
          />
          <Button
            title="Home"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </Container>
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
