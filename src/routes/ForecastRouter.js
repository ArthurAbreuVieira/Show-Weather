import React from 'react';

import { AntDesign, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Forecast from '../pages/Forecast';
import HourlyForecast from '../pages/HourlyForecast';
import DailyForecast from '../pages/DailyForecast';

const Tab = createBottomTabNavigator();

export default function ForecastRouter({ route }) {
  const { data, location, theme } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Forecast"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme==='dark'?'#444':'#ededed',
          height: 55,
          borderTopColor: '#555',
        },
        tabBarInactiveTintColor: '#888',
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
            backgroundColor: theme==='dark'?'#444':'#ededed',
            elevation: 20,
          },
          title: "Previsão do tempo",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#777',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          },
          tabBarLabel: "Agora",
          tabBarIcon: ({ focused }) => 
            <AntDesign 
              name={focused?'cloud':'cloudo'} 
              size={24} 
              color={focused?'#4aaaff':'#888'} 
            />
        }}
        initialParams={{
          data,
          location,
          theme
        }}
      />
      <Tab.Screen 
        name="HourlyForecast" 
        component={HourlyForecast} 
        options={{
          headerStyle: {
            backgroundColor: theme==='dark'?'#444':'#ededed',
            elevation: 0,
          },
          title: "Previsão por Hora",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#777',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          },
          tabBarLabel: "Horária",
          tabBarIcon: ({ focused }) => 
            <AntDesign 
              name={focused?'clockcircle':'clockcircleo'} 
              size={24} 
              color={focused?'#4aaaff':'#888'} 
            />
        }}
        initialParams={{
          data,
          location,
          theme
        }}
      />
      <Tab.Screen 
        name="DailyForecast" 
        component={DailyForecast} 
        options={{
          headerStyle: {
            backgroundColor: theme==='dark'?'#444':'#ededed',
            elevation: 20,
          },
          title: "Previsão por Dia",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#777',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingBottom: 25
          },
          tabBarLabel: "Diária",
          tabBarIcon: ({ focused }) => 
            <Ionicons 
              name={focused?'md-today':'md-today-sharp'} 
              size={24} 
              color={focused?'#4aaaff':'#888'} 
            />
        }}
        initialParams={{
          data,
          location,
          theme
        }}
      />
    </Tab.Navigator>
  );
}