import React from 'react';

import {
  Container,
  Text,
  Row,
  RowItem,
} from './styles'

export default function ConditionsDetails({ color, data }) {
  data = data.hasOwnProperty("current") ? data.current : data;
  
  const wind = (data.wind_speed * 3.6).toFixed(1);
  const humidity = data.humidity;
  const clouds = data.clouds;
  const uvi = data.uvi;

  return (
    <Container>
      <Row color={color}>
        <RowItem>
          <Text>Vento</Text>
          <Text color="#aaa" >
            {wind} k/m
          </Text>
        </RowItem>
        <RowItem>
          <Text>Umidade</Text>
          <Text color="#aaa" >
            {humidity}%
          </Text>
        </RowItem>
      </Row>

      <Row color={color}>
        <RowItem>
          <Text>Nublado</Text>
          <Text color="#aaa" >
            {clouds}%
          </Text>
        </RowItem>
        <RowItem>
          <Text>UV</Text>
          <Text color="#aaa" >
            {uvi}
          </Text>
        </RowItem>
      </Row>
    </Container>
  );
}