import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Float,
  Date,
  Location
} from './styles';

export default function QuickInfo({ color }) {
  return (
    <Container color={color}>
      <Ionicons name="sunny-sharp" size={45} color="#ffa53b" />
      <Float>31,9°</Float>
      <Date>Segunda-Feira | 05/10</Date>
      <Location>Belo Horizonte, Brazil</Location>
    </Container>
  );
}