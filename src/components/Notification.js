import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Notifications extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>{this.props.sender}</Text>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 72,
    justifyContent: 'center',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    backgroundColor: '#FFF'
  }
});

export default Notifications;