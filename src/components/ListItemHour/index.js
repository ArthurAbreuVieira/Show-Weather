import React from 'react';
import { ScrollView } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Title,
} from './styles'

export default function ListItemHour({ date }) {
  return (
    <Container>
      <Ionicons name="sunny-sharp" size={35} color="#ffa53b" />
      <Title>{date.hour}</Title>
    </Container>
  );
}