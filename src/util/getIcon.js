import React from 'react';

import { 
  Ionicons, 
  Feather, 
  Fontisto, 
  MaterialCommunityIcons 
} from '@expo/vector-icons';

import convertTimestamp from './convertTimestamp';

export default function getIcon(id, date, size, color) {
  if(String(id).startsWith('2')) {

    return (
      <Ionicons 
        name="thunderstorm-outline" 
        size={size} 
        color={color||"#4ac0ff"} 
      />);

  } else if(String(id).startsWith('3')) {

    return (
      <Feather 
        name="cloud-drizzle" 
        size={size} 
        color={color||"#4ac0ff"} 
      />);

  } else if(String(id).startsWith('5')) {

    return (
      <Fontisto 
        name="rain" 
        size={size} 
        color={color||"#4ac0ff"} 
      />);

  } else if(String(id).startsWith('6')) {

    return (
      <Fontisto 
        name="snowflake-8" 
        size={size} 
        color={color||"#4ac0ff"} 
      />);

  } else if(String(id).startsWith('7')) {

    return (
      <MaterialCommunityIcons 
        name="weather-fog" 
        size={size} 
        color={color||"#666"} 
      />);

  } else if(id == '800') {

    if(Number.parseInt(convertTimestamp(date).hour) >= 5 && 
      Number.parseInt(convertTimestamp(date).hour) <= 17) {

      return (
          <Ionicons 
        name="ios-sunny" 
        size={size} 
        color={color||"#ffa53b"} 
      />);

    } else {

      return (
          <Ionicons 
        name="md-moon" 
        size={size} 
        color={color||"#0051ba"} 
      />);
    }
  } else if(id == '801') {

    if(Number.parseInt(convertTimestamp(date).hour) >= 5 && 
      Number.parseInt(convertTimestamp(date).hour) <= 17) {

      return (
          <MaterialCommunityIcons 
        name="weather-partly-cloudy" 
        size={size} 
        color={color||"#666"} 
      />);

    } else {

      return (
          <MaterialCommunityIcons 
        name="weather-night-partly-cloudy" 
        size={size} 
        color={color||"#666"} 
      />);
    }
  } else {
    
    return (
      <Ionicons 
        name="ios-cloudy" 
        size={size} 
        color={color||"#666"} 
      />);
  }
}