import React from 'react';
import { Dimensions } from 'react-native';

import { ThemeProvider } from 'styled-components';

import convertTimestamp from '../../util/convertTimestamp';

import ListItem from '../../components/ListItem';

import {
  Container,
  List,
  Text,
} from './styles'

export default function HourlyForecast({ route }) {
  let { data, location, theme } = route.params;
  data = JSON.parse(data).hourly;

  const date = convertTimestamp(data[0].dt);

  const dailyData = [];

  data.forEach(day => {
    if (convertTimestamp(day.dt).day === convertTimestamp(data[0].dt).day) {
      dailyData.push(day);
    }
  });

  return (
    <ThemeProvider theme={{ t: theme }}>
      <Container>
        <Text
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#000"
          }}
        >
          {`${location} - ${date.dayOfWeek}, ${date.date}`}
        </Text>
        <List
          contentContainerStyle={{ 
            justifyContent: 'center', alignItems: 'center' 
          }}
          data={dailyData}
          renderItem={({ item }) => (
            <ListItem 
              data={item} 
              screenWidth={Dimensions.get('window').width}
            />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </Container>
    </ThemeProvider>
  );
}