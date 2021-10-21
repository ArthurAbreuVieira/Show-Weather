import React from 'react';

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

export default function HourlyCard({ navigation, data, theme }) {
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
  
  const { _10, _18, _22 } = hourly;

  if (data.hasOwnProperty("hourly")) {

    for (const hour of data.hourly) {
      if (_10.temp !== undefined && _18.temp !== undefined && _22.temp !== undefined) break;

      if (convertTimestamp(hour.dt).single_hour == "10") {
        _10.temp = Math.round(hour.temp);
        _10.icon = getIcon(hour.weather[0].id, hour.dt, 40, "#fff");
      } else if (convertTimestamp(hour.dt).hour === "18:00") {
        _18.temp = Math.round(hour.temp);
        _18.icon = getIcon(hour.weather[0].id, hour.dt, 40, "#fff");
      } else if (convertTimestamp(hour.dt).hour === "20:00") {
        _22.temp = Math.round(hour.temp);
        _22.icon = getIcon(hour.weather[0].id, hour.dt, 40, "#fff");
      }
    }
  } else {
    _10.temp = Math.floor(data.temp.morn);
    _10.icon = getIcon(data.weather[0], data.dt, 40, "#fff");

    _18.temp = Math.floor(data.temp.day);
    _18.icon = getIcon(data.weather[0], data.dt, 40, "#fff");

    _22.temp = Math.floor(data.temp.night);
    _22.icon = getIcon(data.weather[0], data.dt, 40, "#fff");
  }

  return (
    <Container>
      <Row>
        <HalfBG
          color={theme === 'dark' ? "#444" : "#ededed"}
          blr="99px"
          brr="99px"
          position="top"
        />

        <Card 
          color="#f58a5b" 
          activeOpacity={.7} 
          onPress={() => navigation.navigate("HourlyForecast")}
        >
          <HalfBG
            color="#e16f7b"
            tlr="45px"
            blr="20px"
            brr="20px"
            position="bottom"
          />
          <Content>
            <Hour>10:00</Hour>
            {_10.icon}
            <Temperature>{_10.temp}°</Temperature>
          </Content>
        </Card>
        <Card 
          color="#b46490" 
          activeOpacity={.7} 
          onPress={() => navigation.navigate("HourlyForecast")}
        >
          <HalfBG
            color="#7b5f8f"
            blr="20px"
            brr="20px"
            position="bottom"
          />
          <Content>
            <Hour>18:00</Hour>
            {_18.icon}
            <Temperature>{_18.temp}°</Temperature>
          </Content>
        </Card>
        <Card 
          color="#2f4858" 
          activeOpacity={.7} 
          onPress={() => navigation.navigate("HourlyForecast")}
        >
          <HalfBG
            color="#49577a"
            tlr="20px"
            trr="20px"
            brr="45px"
            position="top"
          />
          <Content>
            <Hour>22:00</Hour>
            {_22.icon}
            <Temperature>{_22.temp}°</Temperature>
          </Content>
        </Card>

      </Row>
      <Row buttonRow>
        <Button 
          activeOpacity={.8} 
          onPress={() => navigation.navigate("HourlyForecast")}
          color="#e16f7b"
        >
          <Text color="#fff">Ver previsão horária</Text>
        </Button>
      </Row>
    </Container>
  );
}