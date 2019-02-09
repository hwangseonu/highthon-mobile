import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import BottomNavigation from './src/containers/BottomNavigation';
import Main from './src/containers/Main';
import ActionButton from 'react-native-action-button';
import {Icon} from "react-native-elements";
import Notifications from "./src/containers/Notifications";
import Plans from "./src/containers/Plans";
import Account from "./src/containers/Account";

export default class App extends Component<Props> {
  state = {
    isActive: false,
    active: 'main'
  };

  componentDidMount(): void {
    this.event.on('newTab', (key) => {
      this.setState({active: key})
    })
  }

  render() {
    let current = null;

    switch (this.state.active) {
      case 'main':
        current = <Main/>;
        break;
      case 'notifications':
        current = <Notifications/>;
        break;
      case 'plans':
        current = <Plans/>;
        break;
      case 'account':
        current = <Account/>;
        break;
    }

    return (
      <View style={styles.root}>
        {current}
        <ActionButton buttonColor={this.state.isActive ? '#000' : '#FFF'} style={{
          marginBottom: 80
        }} renderIcon={() => (
          <Icon name={'add'} color={this.state.isActive ? '#FFF': '#000'}/>
        )} onPress={() => this.setState({isActive: !this.state.isActive})}>
          <ActionButton.Item buttonColor='#FFF' onPress={() => alert("Hello, World")}>
            <Icon name="location-on" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#FFF' onPress={() => alert("안녕 세상아")}>
            <Icon name="person-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <BottomNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
