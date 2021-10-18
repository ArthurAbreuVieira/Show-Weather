import React from "react";

import { Entypo } from '@expo/vector-icons';

import {
  Container,
  Card,
  Section,
  Title,
  Text,
  Row,
  RowItem,
  Button,
  Header,
  Div,

} from './styles'

export default function CardError({ reload }) {
  return (
    <Card>
      <Title color="#666">Não foi possivel obter sua localização</Title>
      <Div color="transparent" direction="row" justify="space-around" width="100%">
        <Button onPress={reload}>
          <Entypo name="warning" size={30} color="#fff" style={{top: -6}} />
          <Text color="#fff">Tentar novamente</Text>
          <Entypo name="warning" size={30} color="#fff" style={{top: -6}} />
        </Button>
      </Div>
    </Card>)
}