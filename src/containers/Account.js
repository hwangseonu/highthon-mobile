import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Image, Dimensions, Button, AsyncStorage} from 'react-native';
import Select from 'react-native-picker-select';
import axios from 'axios';

import AppIcon from '../assets/images/app_icon.png';

class Account extends Component {
  state = {
    id: '',
    password: '',
    username: '',
    age: '',
    gender: '',
    mode: 'login',
  };

  render() {
    return (
      <View style={{
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={AppIcon} style={{
          width: 100,
          height: 100,
          marginBottom: 50
        }}/>
        <View style={{
          width: Dimensions.get('window').width
        }}>
          <TextInput
            placeholder={'Id'}
            style={styles.input}
            onChangeText={(id) => this.setState({id})}
            value={this.state.id}/>
          <TextInput
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}/>
          {this.state.mode === 'register' ? (
            <TextInput
              placeholder={'Name'}
              style={styles.input}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}/>
          ) : null}
          {this.state.mode === 'register' ? (
            <TextInput
              placeholder={'Age'}
              style={styles.input}
              onChangeText={(age) => this.setState({age})}
              value={this.state.age}/>
          ) : null}
          {this.state.mode === 'register' ? (
            <Select
              placeholder={{
                label: 'Select your gender...',
                value: null,
                color: '#9EA0A4',
              }}
              items={[
                {
                  label: '남',
                  value: 'male',
                },
                {
                  label: '여',
                  value: 'female',
                }
              ]}
              onValueChange={(value) => {
                this.setState({
                  gender: value,
                });
              }}
              style={styles.select}
              value={this.state.gender}
            />
          ) : null}

          <Button title={'로그인'} onPress={() => {
            if (this.state.mode === 'login') {
              axios.post('/auth/signin', {
                id: this.state.id,
                password: this.state.password
              }).then(async res => {
                try {
                  await AsyncStorage.setItem('jwt', res.data.token);
                  alert("로그인에 성공하였습니다.");
                } catch (error) {
                  alert("로그인에 실패했습니다.");
                }
              }).catch(err => {
                alert("로그인에 실패했습니다.")
              })
            } else {
              this.setState({mode: 'login'})
            }
          }}/>

          <Button title={'회원가입'} onPress={() => {
            if (this.state.mode === 'register') {
              axios.post('/auth/signup', this.state).then(res => {
                alert("회원가입되었습니다.");
                this.setState({
                  id: '',
                  username: '',
                  password: '',
                  age: '',
                  gender: '',
                  mode: 'login'
                })
              }).catch(err => {
                alert("회원가입 도중 오류가 발생했습니다.");
              })
            } else {
              this.setState({mode: 'register'})
            }
          }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 10
  },
  select: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 25,
    paddingLeft: 10
  }
});

export default Account;