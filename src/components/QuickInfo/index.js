import React from 'react';

import getIcon from '../../util/getIcon';

import {
  Container,
  Temperature,
  Date,
  Location,
} from './styles';

export default function QuickInfo({ color, data, date, location }) {
  const formatedDate = date.date;

  const temperature = data.hasOwnProperty("current") ? Math.round(data.current.temp) : Math.round(data.temp.day);

  data = data.hasOwnProperty("current") ? data.current : data;

  return (
    <Container color_={color}>
      {getIcon(data.weather[0].id, data.dt, 55)}
      <Temperature>{temperature}°</Temperature>
      <Date>{date.dayOfWeek} | {formatedDate}</Date>
      <Location>{location}</Location>
    </Container>
  );
}