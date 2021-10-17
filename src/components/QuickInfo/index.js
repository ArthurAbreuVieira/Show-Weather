import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';

import {
  Container,
  Float,
  Date,
  Location
} from './styles';

export default function QuickInfo({ color, data, date }) {
  const formatedDate = date.date;

  return (
    <Container color={color}>
      <Ionicons name="sunny-sharp" size={45} color="#ffa53b" />
      <Float>{data.hasOwnProperty("current") ? data.current.temp : data.temp.day}°</Float>
      <Date>{date.dayOfWeek} | {formatedDate}</Date>
      <Location>Belo Horizonte, Brazil</Location>
    </Container>
  );
}