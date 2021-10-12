import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import TabRouter from './src/routes/TabRouter';
import StackRouter from './src/routes/StackRouter';

export default function App() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});