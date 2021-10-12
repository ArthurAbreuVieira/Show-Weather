import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Forecast from '../pages/Forecast';
import HourlyForecast from '../pages/HourlyForecast';
import DailyForecast from '../pages/DailyForecast';

import TabRouter from './TabRouter';
import ForecastRouter from './ForecastRouter';

const Stack = createStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TabRouter" 
        component={TabRouter} 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="ForecastRouter" 
        component={ForecastRouter} 
        options={{
          // headerStyle: {
          //   backgroundColor: '#ededed',
          //   elevation: 10,
          // },
          // title: "Forecast",
          // headerTitleAlign: 'center',
          // headerTitleStyle: {
          //   color: '#777',
          //   textAlign: 'center',
          //   fontWeight: 'bold',
          //   paddingTop: 25,
          //   paddingBottom: 25
          // }
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}