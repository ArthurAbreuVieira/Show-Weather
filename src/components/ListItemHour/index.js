import React from 'react';
import { ScrollView } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import getIcon from '../../util/getIcon';

import {
  Container,
  Title,
} from './styles'

export default function ListItemHour({ weather, date }) {
  return (
    <Container>
      {/* <Ionicons name="sunny-sharp" size={35} color="#ffa53b" /> */}
      {getIcon(weather, date.timestamp, 35)}
      <Title>{date.hour}</Title>
    </Container>
  );
}