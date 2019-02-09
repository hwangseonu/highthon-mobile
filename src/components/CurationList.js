import React, {Component} from 'react';
import {AsyncStorage, FlatList} from 'react-native';

import CurationCard from "./CurationCard";
import axios from "axios";

class CurationList extends Component {

  render() {
    return (
      <FlatList
        style={{
          marginTop: this.props.top,
          maxHeight: 162
        }}
        horizontal={true}
        // data={[{title: '구디 맛집을 찾아서', photo: this.props.photo}, {title: '구디 맛집을 찾아서', photo: this.props.photo}]}
        data={this.props.data}
        renderItem={({item}) => <CurationCard title={item.name} photo={item.img} location={item.locate}/>}>
      </FlatList>
    );
  }
}

export default CurationList;