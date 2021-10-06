
import React from 'react';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Text,
  Row,
  RowItem,
} from './styles'

export default function ConditionsDetails({ navigation, color }) {
  return (
    <Container>
      <Row color={color}>
        <RowItem>
          <Text>Wind</Text>
          <Text color="#aaa" >12 m/h</Text>
        </RowItem>
        <RowItem>
          <Text>Humidity</Text>
          <Text color="#aaa" >55%</Text>
        </RowItem>
      </Row>

      <Row color={color}>
        <RowItem>
          <Text>Visibility</Text>
          <Text color="#aaa" >25 km</Text>
        </RowItem>
        <RowItem>
          <Text>UV</Text>
          <Text color="#aaa" >1</Text>
        </RowItem>
      </Row>
    </Container>
  );
}