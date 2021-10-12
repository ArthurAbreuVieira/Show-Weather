import React from 'react';
import { Dimensions } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerStyle: {
            backgroundColor: '#ededed',
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
          }
          // headerShown: false
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          headerStyle: {
            backgroundColor: '#ededed',
            elevation: 10,
          },
          title: "Search",
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