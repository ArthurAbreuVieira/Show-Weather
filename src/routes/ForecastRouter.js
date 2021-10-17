import React from 'react';
import { Dimensions } from 'react-native'

import { AntDesign, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Forecast from '../pages/Forecast';
import HourlyForecast from '../pages/HourlyForecast';
import DailyForecast from '../pages/DailyForecast';

const Tab = createBottomTabNavigator();

export default function ForecastRouter({ route }) {
  const { data } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="HourlyForecast"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#ededed',
        },
        tabBarActiveTintColor: '#4aaaff',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontSize: 13
        },
      }}
    >
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
          },
          tabBarIcon: ({ focused }) => <AntDesign name={focused?'cloud':'cloudo'} size={24} color={focused?'#4aaaff':'#888'} />
        }}
        initialParams={{
          data,
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
          },
          tabBarIcon: ({ focused }) => <AntDesign name={focused?'clockcircle':'clockcircleo'} size={24} color={focused?'#4aaaff':'#888'} />
        }}
        initialParams={{
          data,
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
          },
          tabBarIcon: ({ focused }) => <Ionicons name={focused?'md-today':'md-today-sharp'} size={24} color={focused?'#4aaaff':'#888'} />
        }}
        initialParams={{
          data,
        }}
      />
    </Tab.Navigator>
  );
}