import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ListItemHour from '../ListItemHour';
import ListItemDetails from '../ListItemDetails';

import {
  Container,
  List,
  Title,
  Text,
  MainRow,
  RowItem,
  Button,
  Div,
  HalfBG,
} from './styles'

export default function RecentSearch({ text, screenWidth }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Container screenWidth={screenWidth}>
      <HalfBG
        color="#ededed"
        tlr="300px"
        trr="20px"
        blr="20px"
        brr="300px"
        position="top"
      />
      <Div direction="row" width="80%" height="80px" justify="space-evenly" color="transparent">
        <Ionicons name="sunny-sharp" size={40} color="#ffa53b" style={{top: 3}}/>
        <Title>28°</Title>
      </Div>
      <Text color="#888" numberOfLines={1}>Belo Horizonte</Text>
    </Container>
  );
}