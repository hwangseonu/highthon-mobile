import React, {Component} from 'react';
import { View} from "react-native";
import Navigation, {IconTab} from 'react-native-material-bottom-navigation'
import {Icon} from "react-native-elements";

class BottomNavigation extends Component {
  tabs = [
    {
      key: 'main',
      icon: 'home',
      label: 'Movies & TV',
      barColor: '#000'
    },
    {
      key: 'notifications',
      icon: 'notifications',
      label: 'Music',
      barColor: '#000'
    },
    {
      key: 'plans',
      icon: 'assignment',
      label: 'plans',
      barColor: '#000'
    },
    {
      key: 'account',
      icon: 'account-circle',
      label: 'plans',
      barColor: '#000'
    }
  ];

  renderIcon = icon => ({isActive}) => (
    <Icon size={24} color={isActive ? '#ff6f61' : "white"} name={icon}/>
  );

  renderTab = ({tab, isActive}) => (
    <IconTab
      isActive={isActive}
      key={tab.key}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <View style={{
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}>
        <Navigation
          onTabPress={({key}) => this.event.emit('newTab', key)}
          renderTab={this.renderTab}
          tabs={this.tabs}/>
      </View>
    );
  }
}

export default BottomNavigation;