import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}