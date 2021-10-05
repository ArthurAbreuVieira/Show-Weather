import React from 'react';

import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

import {
  Container,
  Card,
  HalfBG,
  Content,
  Hour,
  Temperature,
  Button,
  Text,
  Row,
} from './styles';

export default function HourlyCard({ navigation }) {
  return (
    <Container>
      <Row>
        <HalfBG
          color="#ededed"
          blr="99px"
          brr="99px"
          position="top"
        />

        <Card color="#f58a5b" activeOpacity={.7} onPress={() => navigation.navigate("HourlyForecast")}>
          <HalfBG
            color="#e16f7b"
            tlr="45px"
            blr="20px"
            brr="20px"
            position="bottom"
          />
          <Content>
            <Hour>10:00</Hour>
            <Feather name="cloud-rain" size={40} color="#fff" />
            <Temperature>20°</Temperature>
          </Content>
        </Card>
        <Card color="#b46490" activeOpacity={.7} onPress={() => navigation.navigate("HourlyForecast")}>
          <HalfBG
            color="#7b5f8f"
            blr="20px"
            brr="20px"
            position="bottom"
          />
          <Content>
            <Hour>18:00</Hour>
            <Ionicons name="sunny-sharp" size={40} color="#fff" />
            <Temperature>19°</Temperature>
          </Content>
        </Card>
        <Card color="#2f4858" activeOpacity={.7} onPress={() => navigation.navigate("HourlyForecast")}>
          <HalfBG
            color="#49577a"
            tlr="20px"
            trr="20px"
            brr="45px"
            position="top"
          />
          <Content>
            <Hour>22:00</Hour>
            <FontAwesome5 name="moon" size={40} color="#fff" />
            <Temperature>5°</Temperature>
          </Content>
        </Card>

      </Row>
      <Row buttonRow>
        <Button activeOpacity={.8} onPress={() => navigation.navigate("HourlyForecast")} color="#e16f7b">
          <Text color="#fff">Ver previsão horaria</Text>
        </Button>
      </Row>
    </Container>
  );
}