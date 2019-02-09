import React, {Component} from 'react';
import {AsyncStorage, FlatList} from 'react-native';

import PlaceCard from "./PlaceCard";
import axios from "axios";

class CurationList extends Component {
  state = {
    data: []
  };

  async getData() {
    try {
      const jwt = await AsyncStorage.getItem("jwt");
      axios.get('/place/locate/마포구', {
        headers: {
          token: jwt,
        }
      }).then(res => {
        this.setState({data: res.data});
      }).catch(err => {
        throw err
      })
    } catch(err) {
      alert("오류가 발생했습니다.")
    }
  }

  componentDidMount(): void {
    this.getData();
  }

  render() {
    return (
      <FlatList
        style={{
          marginTop: this.props.top,
          height: 50,
          marginBottom: 100
        }}
        data={this.state.data}
        renderItem={({item}) => <PlaceCard title={item.name} photo={item.img} />}>
      </FlatList>
    );
  }
}

export default CurationList;