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

export default function ListItemDetails({ data }) {
  const description = data.weather[0].description;

  return (
    <Container>
      <ConditionsDetails color="#ededed" data={data}/>

      <Row card style={{top: -20}}>
        <RowItem column large >
          <Text>{description.charAt(0).toUpperCase()+description.substr(1, description.length-1)}</Text>
        </RowItem>
      </Row>
    </Container>
  );
}