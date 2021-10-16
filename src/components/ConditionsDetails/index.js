
import React from 'react';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Text,
  Row,
  RowItem,
} from './styles'

export default function ConditionsDetails({ navigation, color, data }) {
  return (
    <Container>
      <Row color={color}>
        <RowItem>
          <Text>Wind</Text>
          <Text color="#aaa" >{data.current !== undefined ? data.current.wind_speed : data.wind_speed} m/h</Text>
        </RowItem>
        <RowItem>
          <Text>Humidity</Text>
          <Text color="#aaa" >{data.current !== undefined ? data.current.humidity : data.humidity}%</Text>
        </RowItem>
      </Row>

      <Row color={color}>
        <RowItem>
          <Text>Visibility</Text>
          <Text color="#aaa" >{data.current !== undefined ? data.current.visibility : data.visibility} km</Text>
        </RowItem>
        <RowItem>
          <Text>UV</Text>
          <Text color="#aaa" >{data.current !== undefined ? data.current.uvi : data.uvi}</Text>
        </RowItem>
      </Row>
    </Container>
  );
}