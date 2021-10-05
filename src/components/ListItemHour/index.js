import React from 'react';
import { ScrollView } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Title,
} from './styles'

export default function ListItemHour({ text }) {
  return (
    <Container>
      <Ionicons name="sunny-sharp" size={35} color="#ffa53b" />
      <Title>20:00</Title>
    </Container>
  );
}