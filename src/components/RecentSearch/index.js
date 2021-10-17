import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import getIcon from '../../util/getIcon';

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

export default function RecentSearch({ city, coords, screenWidth, search }) {
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState(<></>);

  useEffect(() => {
    (async()=>{
      let data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly,daily,alerts&units=metric&lang=pt_br&appid=2d1071d2a640b454a941894654415839`);
      data = await data.json();
      setTemp(Math.round(data.current.temp));
      setIcon(getIcon(data.daily[0].weather[0].id, data.dt, 30));
    })();
  }, []);

  return (
    <Container screenWidth={screenWidth} onPress={search}>
      <HalfBG
        color="#cbcbcb"
        tlr="600px"
        trr="600px"
        blr="30px"
        brr="30px"
        position="bottom"
      />
      <Div direction="row" width="80%" height="80px" justify="space-evenly" color="transparent">
        {icon}
        <Title>{temp}°</Title>
      </Div>
      <Text color="#888" numberOfLines={1}>{city}</Text>
    </Container>
  );
}