import React from 'react';
import { Dimensions } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Forecast from '../pages/Forecast';
import HourlyForecast from '../pages/HourlyForecast';
import DailyForecast from '../pages/DailyForecast';

const Tab = createBottomTabNavigator();

export default function ForecastRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
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
      <Tab.Screen 
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
      <Tab.Screen 
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
    </Tab.Navigator>
  );
}