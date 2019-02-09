import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, View, Text, Image, Dimensions} from 'react-native';

class PlaceCard extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.wrapper} onPress={() => alert("Yaay!")}>
        <View style={styles.container}>
          <View style={{
            flexDirection: 'row'
          }}>
            <Image source={this.props.photo} style={styles.photo}/>
            <View style={{
              flex: 1,
              flexDirection: 'column',
            }}>
              <Text style={styles.title}>{this.props.title}</Text>
              <Text style={styles.time}>6시간 소요</Text>
            </View>
          </View>
          <View style={{
            height: 52,
            backgroundColor: '#fff',
            justifyContent: 'center',
            borderRadius: 6
          }}>
            <Text style={{
              marginLeft: 10,
              fontWeight: 'bold'
            }}>2019년 2월 10일 일요일</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  photo: {
    maxWidth: 214,
    height: 150,
    borderRadius: 6
  },
  title: {
    flexWrap: 'wrap',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10
  },
  time: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 9,
    color: 'rgba(0, 0, 0, 0.5)'
  }
});

export default PlaceCard;