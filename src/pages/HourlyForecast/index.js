import React from 'react';
import { Dimensions } from 'react-native';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';

import ListItem from '../../components/ListItem';

import {
  Container,
  List,
  Title,
  Text,
  Row,
  RowItem,
  Button,
} from './styles'

export default function HourlyForecast({ route }) {
  let { data } = route.params;
  
  data = JSON.parse(data)._W.hourly;
  
  const dailyData = [];

  data.forEach(day => {
    if(convertTimestamp(day.dt).day === convertTimestamp(data[0].dt).day) {
      dailyData.push(day);
    }
  });

  // console.log(data);
  

  return (
    <Container>
      <List
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        data={dailyData}
        renderItem={({ item }) => (
          <ListItem data={item} screenWidth={Dimensions.get('window').width}/>
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </Container>
  );
}