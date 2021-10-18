import React from 'react';
import { Dimensions } from 'react-native'

import { AntDesign, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
          },
          tabBarLabel: "Início",
          tabBarIcon: ({ focused }) => <Ionicons name={focused?'home':'ios-home-outline'} size={24} color={focused?'#4aaaff':'#888'} />
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
          title: "Pesquisar",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#777',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          },
          tabBarLabel: "Pesquisar",
          tabBarIcon: ({ focused }) => <AntDesign name="search1" size={24} color={focused?'#4aaaff':'#888'} />
          // headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}