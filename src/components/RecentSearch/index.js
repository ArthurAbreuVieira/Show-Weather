import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

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
  const [temp, setTemp] = useState(undefined);
  const [icon, setIcon] = useState(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      let data;
      try {
        data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,daily,alerts&units=metric&lang=pt_br&appid=6d50e3b0fee937bf00a5e425b2d4e2bf`);
      } catch (error) {
        setError(true);
      }
      data = await data.json();

      if (data.cod && data.message) {
        setError(true);
        return;
      }

      setTemp(Math.round(data.current.temp));
      setIcon(getIcon(data.hourly[0].weather[0].id, data.hourly[0].dt, 50));
    })();
  }, []);

  return (
    <Container screenWidth={screenWidth} onPress={search} error={error}>
      <HalfBG
        tlr="600px"
        trr="600px"
        blr="30px"
        brr="30px"
        position="bottom"
      />
      {icon === undefined && temp === undefined ?
        <ActivityIndicator size="large" color="#4ac0ff" />
        : <>
          <Div direction="row" width="80%" height="80px" justify="space-evenly" color="transparent">
            {error ? <Text color="#555">Erro ao buscar dados da pesquisa</Text>
              :
              <>
                {icon}
                <Title>{temp}°</Title>
              </>}
          </Div>
          {!error &&
            <Text color="#888" numberOfLines={1}>{city}</Text>}
        </>}
    </Container>
  );
}