import React from 'react';

import getIcon from '../../util/getIcon';

import {
  Container,
  Title,
} from './styles'

export default function ListItemHour({ weather, date }) {
  return (
    <Container>
      {getIcon(weather, date.timestamp, 35)}
      <Title>{date.hour}</Title>
    </Container>
  );
}