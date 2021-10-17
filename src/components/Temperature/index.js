
import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import {
  Container,
  Text,
  Card,
  RowItem,
} from './styles'

export default function Temperature({ data }) {
  return (
    <Container>
      <RowItem>
        <Card column center >
          <Text>Temperatura minima</Text>
          <Card width="">
            <FontAwesome5 name="temperature-low" size={35} color="#00a2ff" style={{ top: -5 }} />
            <Text color="#888" size="30px" >{Math.round(data.min)}°</Text>
          </Card>
        </Card>

        <Card column center >
          <Text>Temperatura maxima</Text>
          <Card width="">
            <FontAwesome5 name="temperature-high" size={35} color="orangered" style={{ top: -5 }} />
            <Text color="#888" size="30px" >{Math.round(data.max)}°</Text>
          </Card>
        </Card>
      </RowItem>
    </Container>
  );
}

