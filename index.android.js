/**
 * React native Bilbao project
 * https://www.birfit.compile
 * Lider Business Group
 * Developer by Javier Portilla
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

import LoginScreen from "./screens/login/index";
import SignupScreen from "./screens/signup/index";
import MemberScreen from "./screens/members/index";

export default class birfit extends Component {
  render() {
    return (
      <Navigator initialRoute = {{'id': 'Login'}}
	  renderScene = {this.navigatorRenderScene} />
    );
  }
  
  navigatorRenderScene(route, navigator){
	  _navigator = navigator;
	  
	  switch(route.id){
		case 'Login':
			return( <LoginScreen navigator = {navigator} /> );
		case 'Memberarea':
			return( <MemberScreen navigator = {navigator} /> );
		case 'Signup':
			return( <SignupScreen navigator = {navigator} /> );
			
	  }
	  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('birfit', () => birfit);
