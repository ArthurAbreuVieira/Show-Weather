import React from 'react';
import { ScrollView } from 'react-native';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Section,
  Title,
  Text,
  Row,
  RowItem,
  Button,

} from './styles'

export default function ListItemDetails({ text }) {
  return (
    <Container>
      <Row>
        <RowItem>
          <Text>Wind</Text>
          <Text color="#aaa" >12 m/h</Text>
        </RowItem>
        <RowItem>
          <Text>Humidity</Text>
          <Text color="#aaa" >55%</Text>
        </RowItem>
      </Row>

      <Row>
        <RowItem>
          <Text>Visibility</Text>
          <Text color="#aaa" >25 km</Text>
        </RowItem>
        <RowItem>
          <Text>UV</Text>
          <Text color="#aaa" >1</Text>
        </RowItem>
      </Row>

      <Row card >
        <RowItem column large >
          <Title>Nublado</Title>
          <Text>Poucas nuvens</Text>
        </RowItem>
      </Row>
    </Container>
  );
}