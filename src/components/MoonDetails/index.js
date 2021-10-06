
import React from 'react';

import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import {
  Container,
  Text,
  Row,
  RowItem,
} from './styles'

export default function MoonDetails({ navigation, color }) {
  return (
    <Container>
      <Row card>
        <RowItem column center >
          <Text>Nascer da lua</Text>
          <FontAwesome5 name="moon" size={30} color="#49577a" />
          <Text color="#888" >5:00</Text>
        </RowItem>
        <RowItem column center >
          <Text>Pôr da lua</Text>
          <Ionicons name="md-moon" size={30} color="#49577a" />
          <Text color="#888" >18:30</Text>
        </RowItem>
      </Row>
    </Container>
  );
}

