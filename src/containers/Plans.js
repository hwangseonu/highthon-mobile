import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';

import PlanCard from '../components/PlanCard';
import photo from '../assets/images/photo1.png';
import {Text} from "react-native-elements";

class Plans extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: '#fff',
        padding: 10
      }}>
        <Text style={{
          alignSelf: 'flex-start',
          top: 50,
          left: 20,
          fontWeight: 'bold',
          fontSize: 20
        }}>일정</Text>
        <FlatList
          style={{
            marginTop: 70,
            marginBottom: 100
          }}
          data={[
            {title: '구디 맛집을 찾아서'},
            {title: '짱 오락실'},
            {title: '한옥 마을'}
            ]}
          renderItem={({item}) => <PlanCard title={item.title} message={item.message} photo={photo}/>}>
        </FlatList>
      </View>
    );
  }
}

export default Plans;