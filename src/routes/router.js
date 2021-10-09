import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Forecast from '../pages/Forecast';
import HourlyForecast from '../pages/HourlyForecast';
import DailyForecast from '../pages/DailyForecast';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Forecast" 
        component={Forecast} 
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="HourlyForecast" 
        component={HourlyForecast} 
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="DailyForecast" 
        component={DailyForecast} 
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}