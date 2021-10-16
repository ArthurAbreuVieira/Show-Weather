import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Float,
  Date,
  Location
} from './styles';

export default function QuickInfo({ color, data }) {
  return (
    <Container color={color}>
      <Ionicons name="sunny-sharp" size={45} color="#ffa53b" />
      <Float>{data.current?.temp !== undefined ? data.current.temp : data.temp.day}°</Float>
      <Date>Segunda-Feira | 05/10</Date>
      <Location>Belo Horizonte, Brazil</Location>
    </Container>
  );
}