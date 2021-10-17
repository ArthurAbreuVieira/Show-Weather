
import React from 'react';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';

import {
  Container,
  Text,
  Row,
  RowItem,
} from './styles'

export default function SunDetails({ navigation, color, data }) {
  const sunRise = convertTimestamp(data.hasOwnProperty("current") ? data.current.sunrise : data.sunrise).hour;
  const sunSet = convertTimestamp(data.hasOwnProperty("current") ? data.current.sunset : data.sunset).hour;

  return (
    <Container>
      <Row card>
        <RowItem column center >
          <Text>Nascer do sol</Text>
          <Feather name="sunrise" size={30} color="orangered" />
          <Text color="#888" >{sunRise}</Text>
        </RowItem>
        <RowItem column center >
          <Text>Por do sol</Text>
          <MaterialCommunityIcons name="weather-sunset" size={30} color="orangered" />
          <Text color="#888" >{sunSet}</Text>
        </RowItem>
      </Row>
    </Container>
  );
}

