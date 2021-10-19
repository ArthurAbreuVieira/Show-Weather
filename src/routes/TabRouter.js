import React from 'react';
import { Text } from 'react-native'

import { AntDesign, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function TabRouter({ navigation, route }) {
  const { theme } = route.params;
  // const theme = 'dark';

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme==='dark'?'#ededed':'#444',
          height: 55,
          borderTopColor: '#555',
        },
        tabBarInactiveTintColor: '#888',
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
            backgroundColor: theme==='dark'?'#ededed':'#444',
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
        initialParams={{
          theme
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          headerStyle: {
            backgroundColor: theme==='dark'?'#ededed':'#444',
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
        initialParams={{
          theme
        }}
      />
    </Tab.Navigator>
  );
}