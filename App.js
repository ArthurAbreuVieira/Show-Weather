import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import StackRouter from './src/routes/StackRouter';

export default function App() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}