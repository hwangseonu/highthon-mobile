import React, {Component} from 'react';
import {StyleSheet, View, Text, AsyncStorage} from 'react-native';
import axios from 'axios';

import SearchButton from "../components/SearchButton";
import CurationList from "../components/CurationList";
import PlaceCardList from "../components/PlaceCardList";

import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.png";

class Main extends Component {
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
      <View style={styles.container}>
        <Text style={styles.curation}>큐레이션</Text>
        <SearchButton style={styles.searchButton}/>
        <CurationList data={this.state.data.slice(0, 5)} top={80} photo={photo1}/>
        <CurationList data={this.state.data.slice(5, 10)} top={5} photo={photo2}/>

        <Text style={styles.recommend}>여기는 어때?</Text>
        <PlaceCardList top={10} photo={photo2}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 40,
    right: 5
  },
  curation: {
    alignSelf: 'flex-start',
    top: 60,
    left: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  recommend: {
    alignSelf: 'flex-start',
    top: 10,
    left: 20,
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default Main;