import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Float,
  Location
} from './styles';

export default function Temperature() {
  return (
    <Container>
      <Ionicons name="sunny-sharp" size={45} color="#ffa53b" />
      <Float>31,9°</Float>
      <Location>Belo Horizonte, Brazil</Location>
    </Container>
  );
}