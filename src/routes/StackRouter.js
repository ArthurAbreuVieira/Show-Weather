import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Forecast from '../pages/Forecast';
import HourlyForecast from '../pages/HourlyForecast';
import DailyForecast from '../pages/DailyForecast';

import TabRouter from './TabRouter';

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
        name="Forecast" 
        component={Forecast} 
        options={{
          headerStyle: {
            backgroundColor: '#ededed',
            elevation: 10,
          },
          title: "Forecast",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#777',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          }
          // headerShown: false
        }}
      />
      <Stack.Screen 
        name="HourlyForecast" 
        component={HourlyForecast} 
        options={{
          headerStyle: {
            backgroundColor: '#ededed',
            elevation: 10,
          },
          title: "Hourly Forecast",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#777',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          }
          // headerShown: false
        }}
      />
      <Stack.Screen 
        name="DailyForecast" 
        component={DailyForecast} 
        options={{
          headerStyle: {
            backgroundColor: '#ededed',
            elevation: 10,
          },
          title: "Daily Forecast",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#777',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          }
          // headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}