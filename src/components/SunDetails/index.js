
import React from 'react';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Text,
  Row,
  RowItem,
} from './styles'

export default function SunDetails({ navigation, color }) {
  return (
    <Container>
      <Row card>
        <RowItem column center >
          <Text>Nascer do sol</Text>
          <Feather name="sunrise" size={30} color="orangered" />
          <Text color="#888" >5:00</Text>
        </RowItem>
        <RowItem column center >
          <Text>Por do sol</Text>
          <MaterialCommunityIcons name="weather-sunset" size={30} color="orangered" />
          <Text color="#888" >18:30</Text>
        </RowItem>
      </Row>
    </Container>
  );
}

