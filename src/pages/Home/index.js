import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import fetchWeatherContent from '../../util/fetchWeatherContent';

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

import QuickInfo from '../../components/QuickInfo';
import SelectDay from '../../components/SelectDay';
import HourlyCard from '../../components/HourlyCard';
import ConditionsDetails from '../../components/ConditionsDetails';
import SunDetails from '../../components/SunDetails';

import LoadingModal from '../../components/LoadingModal';

export default function Home({ navigation }) {
  const [location, setLocation] = useState({});
  const [weatherData, setWeatherData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return {error: "Permission denied!"};
      }
    
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const data = await fetchWeatherContent(location.coords.latitude, location.coords.longitude);
      await AsyncStorage.setItem('@weather_data', JSON.stringify(data));
      setWeatherData(data);
    })();

  }, []);


  return (
    <Container>
      <LoadingModal visible={loading} />

      <Div color="#70f" style={{paddingTop: 12}}>
        <Text color="#fff" size="15px">Segunda-Feira, 04/10</Text>
      </Div>

      <Div style={{marginTop: 50}}>
        <Card>
          <Title color="#666">Sua localização</Title>
          {weatherData === undefined ?
            <ActivityIndicator size="large" color="#4ac0ff"/>
            : <>
          <Text numberOfLines={1} color="#888">Belo Horizonte, Brasil</Text>
          <Div color="transparent" direction="row" justify="space-around" width="40%">
            <Text numberOfLines={1} size="30px" color="#888">36°</Text>
            <Ionicons name="sunny-sharp" size={30} color="#ffa53b" style={{ top: -5 }} />
          </Div>
          <Button onPress={() => {
            setLoading(true);
            navigation.navigate("ForecastRouter", {data: JSON.stringify(weatherData)});
            setLoading(false);
          }}>
            <Text color="#fff">Ver previsão do tempo</Text>
            <AntDesign name="arrowright" size={30} color="#fff" style={{ top: -5 }} />
          </Button>
          </>}
        </Card>

        <Text color="#888">OU</Text>

        <Card>
          <Button onPress={() => navigation.navigate("Search")}>
            <Text color="#fff">Pesquisar por uma cidade</Text>
            <AntDesign name="search1" size={25} color="#fff" style={{ top: -5 }} />
          </Button>
        </Card>
      </Div>
    </Container>
  );
}