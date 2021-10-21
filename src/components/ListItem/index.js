import React, { useState } from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';

import ListItemHour from '../ListItemHour';
import ListItemDetails from '../ListItemDetails';

import {
  Container,
  Title,
  Text,
  MainRow,
  Button,
} from './styles'

export default function ListItem({ data, screenWidth }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Container screenWidth={screenWidth}>
      <MainRow>
        <ListItemHour 
          weather={data.weather[0].id} 
          date={convertTimestamp(data.dt)}
        />
        <Title>{Math.round(data.temp)}°</Title>
        <Button onPress={() => setShowDetails(!showDetails)}>
          <Text color="#fff">
            {!showDetails?'Ver detalhes':'Ver Menos'}
          </Text>
          <MaterialIcons 
            style={{top: -5}}
            name={!showDetails?'arrow-drop-down':'arrow-drop-up'} 
            size={25} 
            color="#fff" 
          />
        </Button>
      </MainRow>

      { showDetails &&
      <ListItemDetails data={data}/> }
    </Container>
  );
}