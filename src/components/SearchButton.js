import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableHighlight, View} from "react-native";
import {Icon} from "react-native-elements";

class SearchButton extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight
          style = {styles.actionButton}
          underlayColor = '#ccc'
          onPress = { () => alert('Yaay!') }>
          <Icon name={'search'}/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButton: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default SearchButton;