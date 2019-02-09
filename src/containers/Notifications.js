import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Notification from '../components/Notification';

class Notifications extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: '#fff',
        padding: 10
      }}>
        <FlatList
          style={{
            marginTop: 100,
          }}
          data={[
            {sender: '기리보이가', message: '약속장소에 도착했다고 합니다.'},
            {sender: '기리보이에게', message: '서울 특별시 서대문구에 있다고 알렸습니다.'},
            {sender: '기리보이가', message: '서울 특별시 서대문구에 있습니다.'},
            {sender: '기리보이와', message: '카페 디원피스에서 만나기로 했습니다.'},
            {sender: '기리보이에게', message: '친구 요청을 보냈습니다.'}]}
          renderItem={({item}) => <Notification sender={item.sender} message={item.message}/>}>
        </FlatList>
      </View>
    );
  }
}

export default Notifications;