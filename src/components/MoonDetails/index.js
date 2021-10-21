
import React from 'react';

import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';

import {
  Container,
  Text,
  Row,
  RowItem,
} from './styles'

export default function MoonDetails({ data }) {
  const moonrise = convertTimestamp(data.hasOwnProperty("current") ? data.current.moonrise : data.moonrise).hour;
  const moonset = convertTimestamp(data.hasOwnProperty("current") ? data.current.moonset : data.moonset).hour;

  return (
    <Container>
      <Row card>
        <RowItem column center >
          <Text>Nascer da lua</Text>
          <FontAwesome5 name="moon" size={30} color="#0051ba" />
          <Text color="#888" >{moonrise}</Text>
        </RowItem>
        <RowItem column center >
          <Text>Pôr da lua</Text>
          <Ionicons name="md-moon" size={30} color="#0051ba" />
          <Text color="#888" >{moonset}</Text>
        </RowItem>
      </Row>
    </Container>
  );
}

