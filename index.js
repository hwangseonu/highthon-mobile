/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import axios from 'axios';
import EventEmitter from 'events';

console.disableYellowBox = true;

axios.defaults.baseURL = 'http://18.216.130.185:5000/';
Component.prototype.event = new EventEmitter();

AppRegistry.registerComponent(appName, () => App);
