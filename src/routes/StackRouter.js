import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Forecast from '../pages/Forecast';
import HourlyForecast from '../pages/HourlyForecast';
import DailyForecast from '../pages/DailyForecast';

import ForecastRouter from './ForecastRouter';
import Home from '../pages/Home';
import Search from '../pages/Search';

const Stack = createStackNavigator();

export default function StackRouter() {
  const theme = 'dark';

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerStyle: {
            backgroundColor: theme==='dark'?'#444':'#ededed',
            elevation: 10,
          },
          title: "Show Weather",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#777',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          },
        }}
        initialParams={{
          theme
        }}
      />
      <Stack.Screen 
        name="Search" 
        component={Search} 
        options={{
          headerStyle: {
            backgroundColor: theme==='dark'?'#444':'#ededed',
            elevation: 10,
          },
          title: "Pesquisar",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#777',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          },
        }}
      />
      <Stack.Screen 
        name="ForecastRouter" 
        component={ForecastRouter} 
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}