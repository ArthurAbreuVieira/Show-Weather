import React from 'react';

import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';

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

export default function HourlyCard({ navigation, data }) {
  const hourly = {
    _10: undefined,
    _18: undefined,
    _20: undefined,
  };

  if (data.hasOwnProperty("hourly")) {

    for (const hour of data.hourly) {
      if(hourly._10 !== undefined && hourly._18 !== undefined && hourly._20 !== undefined) break;

      const horaly = convertTimestamp(hour.dt).hour;
      if(horaly === "10:00") {
        if (hourly._10 !== undefined) return;
        hourly._10 = Math.round(hour.temp);
      } else if(horaly === "18:00") {
        if (hourly._18 !== undefined) return;
        hourly._18 = Math.round(hour.temp);
      } else if(horaly === "20:00") {
        if (hourly._20 !== undefined) return;
        hourly._20 = Math.round(hour.temp);
      }
    }
  } else {
    hourly._10 = Math.floor(data.temp.morn);
    hourly._18 = Math.floor(data.temp.day);
    hourly._20 = Math.floor(data.temp.night);
  }

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
            <Temperature>{hourly._10}°</Temperature>
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
            <Temperature>{hourly._18}°</Temperature>
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
            <Temperature>{hourly._20}°</Temperature>
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