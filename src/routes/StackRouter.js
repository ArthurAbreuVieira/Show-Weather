import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Forecast from '../pages/Forecast';
import HourlyForecast from '../pages/HourlyForecast';
import DailyForecast from '../pages/DailyForecast';

import TabRouter from './TabRouter';
import ForecastRouter from './ForecastRouter';

const Stack = createStackNavigator();

export default function StackRouter() {
  const theme = 'dark';

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TabRouter" 
        component={TabRouter} 
        options={{
          headerShown: false
        }}
        initialParams={{
          theme
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