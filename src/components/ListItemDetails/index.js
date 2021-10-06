import React from 'react';
import { ScrollView } from 'react-native';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import ConditionsDetails from '../ConditionsDetails';

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
      <ConditionsDetails color="#ededed"/>

      <Row card style={{top: -20}}>
        <RowItem column large >
          <Title>Nublado</Title>
          <Text>Poucas nuvens</Text>
        </RowItem>
      </Row>
    </Container>
  );
}