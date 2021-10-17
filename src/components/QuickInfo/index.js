import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';

import {
  Container,
  Temperature,
  Date,
  Location
} from './styles';

export default function QuickInfo({ color, data, date }) {
  const formatedDate = date.date;

  return (
    <Container color={color}>
      <Ionicons name="sunny-sharp" size={45} color="#ffa53b" />
      <Temperature>{data.hasOwnProperty("current") ? Math.round(data.current.temp) : Math.round(data.temp.day)}°</Temperature>
      <Date>{date.dayOfWeek} | {formatedDate}</Date>
      <Location>Belo Horizonte, Brazil</Location>
    </Container>
  );
}