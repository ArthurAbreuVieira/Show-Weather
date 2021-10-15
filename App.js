import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import StackRouter from './src/routes/StackRouter';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#ededed" barStyle="dark-content"/>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </>
  );
}