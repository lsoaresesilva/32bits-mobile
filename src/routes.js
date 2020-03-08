/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './scenes/Login/index';
import Home from './scenes/Home/index';

const AuthStack = createStackNavigator();
const PublicStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Home" component={Home} />
  </AuthStack.Navigator>
);

const PublicScreen = () => (
  <PublicStack.Navigator initialRouteName="Profile">
    <PublicStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
  </PublicStack.Navigator>
);

export default () => {
  return signedIn => {
    return (
      <NavigationContainer headerMode="screen">
        {signedIn ? <AuthStackScreen /> : <PublicScreen />}
      </NavigationContainer>
    );
  };
};
