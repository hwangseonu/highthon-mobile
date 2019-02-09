import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, View, Text, Image, AsyncStorage} from 'react-native';
import axios from "axios";
import {totalTime} from '../utils/map';

class CurationCard extends Component {
  state = {
    distance: 0
  };

  render() {
    totalTime(this.props.location).then(res => {
      this.setState({distance: res})
    });

    return (
      <TouchableHighlight style={styles.wrapper} onPress={() => alert("Yaay!")}>
        <View style={styles.container}>
          <Image source={{uri: this.props.photo}} style={styles.photo}/>
          <View style={{
            flex: 1,
            flexDirection: 'column',
          }}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              fontSize: 9,
              color: 'rgba(0, 0, 0, 0.5)'
            }}>{this.state.distance}m</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 304,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginLeft: 15
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  photo: {
    maxWidth: 204,
    height: 150,
    borderRadius: 6
  },
  title: {
    width: 304 - 214,
    flexWrap: 'wrap',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10
  }
});

export default CurationCard;