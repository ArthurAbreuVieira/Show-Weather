import React from 'react';
import { ScrollView } from 'react-native';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

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

export default function HourlyForecast() {
  const fakeData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <Container>
      <List
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        data={fakeData}
        renderItem={({ item }) => (<ListItem text={item.title}/>)}
        keyExtractor={(item, index) => String(index)}
      />
    </Container>
  );
}