import React from 'react';

import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';
import getIcon from '../../util/getIcon';

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

export default function HourlyCard({ navigation, data, showCards }) {
  const hourly = {
    _10: {
      temp: undefined,
      icon: undefined
    },
    _18: {
      temp: undefined,
      icon: undefined
    },
    _22: {
      temp: undefined,
      icon: undefined
    },
  };

  if (data.hasOwnProperty("hourly")) {

    for (const hour of data.hourly) {
      if(hourly._10.temp !== undefined && hourly._18.temp !== undefined && hourly._22.temp !== undefined) break;

      if(convertTimestamp(hour.dt).single_hour == "10") {
        

        hourly._10.temp = Math.round(hour.temp);
        hourly._10.icon = getIcon(hour.weather[0].id, hour.dt, 40, "#fff");
      } else if(convertTimestamp(hour.dt).hour === "18:00") {
        hourly._18.temp = Math.round(hour.temp);
        hourly._18.icon = getIcon(hour.weather[0].id, hour.dt, 40, "#fff");
      } else if(convertTimestamp(hour.dt).hour === "20:00") {
        hourly._22.temp = Math.round(hour.temp);
        hourly._22.icon = getIcon(hour.weather[0].id, hour.dt, 40, "#fff");
      }
    }
  } else {
    hourly._10.temp = Math.floor(data.temp.morn);
    hourly._10.icon = getIcon(data.weather[0], data.dt, 40, "#fff");

    hourly._18.temp = Math.floor(data.temp.day);
    hourly._18.icon = getIcon(data.weather[0], data.dt, 40, "#fff");

    hourly._22.temp = Math.floor(data.temp.night);
    hourly._22.icon = getIcon(data.weather[0], data.dt, 40, "#fff");
  }

  return (
    <Container>
      {showCards &&
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
            {/* <Feather name="cloud-rain" size={40} color="#fff" /> */}
            {hourly._10.icon}
            <Temperature>{hourly._10.temp}°</Temperature>
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
            {/* <Ionicons name="sunny-sharp" size={40} color="#fff" /> */}
            {hourly._18.icon}
            <Temperature>{hourly._18.temp}°</Temperature>
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
            {hourly._22.icon}
            <Temperature>{hourly._22.temp}°</Temperature>
          </Content>
        </Card>

      </Row>}
      <Row buttonRow>
        <Button activeOpacity={.8} onPress={() => navigation.navigate("HourlyForecast")} color="#e16f7b">
          <Text color="#fff">Ver previsão horaria</Text>
        </Button>
      </Row>
    </Container>
  );
}