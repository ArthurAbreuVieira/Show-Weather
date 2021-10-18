
import React from 'react';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Text,
  Row,
  RowItem,
} from './styles'

export default function ConditionsDetails({ navigation, color, data }) {
  console.log(data);

  return (
    <Container>
      <Row color={color}>
        <RowItem>
          <Text>Vento</Text>
          <Text color="#aaa" >{data.hasOwnProperty("current") ? (data.current.wind_speed*3.6).toFixed(1) : (data.wind_speed*3.6).toFixed(1)} k/m</Text>
        </RowItem>
        <RowItem>
          <Text>Umidade</Text>
          <Text color="#aaa" >{data.hasOwnProperty("current") ? data.current.humidity : data.humidity}%</Text>
        </RowItem>
      </Row>

      <Row color={color}>
        <RowItem>
          <Text>Nublado</Text>
          <Text color="#aaa" >{data.hasOwnProperty("current") ? data.current.clouds : data.clouds}%</Text>
        </RowItem>
        <RowItem>
          <Text>UV</Text>
          <Text color="#aaa" >{data.hasOwnProperty("current") ? data.current.uvi : data.uvi}</Text>
        </RowItem>
      </Row>
    </Container>
  );
}