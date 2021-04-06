import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class PickerWithIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "in",
    };
  }

  onValueChange(value) {
    this.setState(
      {
        selected: value,
      },
      () => this.props.onPick(this.state.selected)
    );
  }

  render() {
    return (
      <Picker
        mode="dropdown"
        // iosHeader="Select Country"
        iosIcon={<Icon name="arrow-down" />}
        style={{
          width: 150,
          height: 50,
        }}
        selectedValue={this.state.selected}
        onValueChange={this.onValueChange.bind(this)}
      >
        <Picker.Item label="India" value="in" />
        <Picker.Item label="USA" value="us" />
        <Picker.Item label="UK" value="gb" />
        <Picker.Item label="France" value="fr" />
        <Picker.Item label="UAE" value="ae" />
        <Picker.Item label="Italy" value="it" />
        <Picker.Item label="China" value="cn" />
        <Picker.Item label="Canada" value="ca" />
        <Picker.Item label="Japan" value="jp" />
        <Picker.Item label="Saudi Arab" value="sa" />
        <Picker.Item label="Germany" value="de" />
        <Picker.Item label="New Zealand" value="nz" />
        <Picker.Item label="Australia" value="au" />
      </Picker>
    );
  }
}
