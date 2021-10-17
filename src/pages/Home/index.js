import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import fetchWeatherContent from '../../util/fetchWeatherContent';
import convertTimestamp from '../../util/convertTimestamp';

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
import getIcon from '../../util/getIcon';

export default function Home({ navigation }) {
  const [location, setLocation] = useState({});
  const [weatherData, setWeatherData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(undefined);
  const [temp, setTemp] = useState(undefined);
  const [icon, setIcon] = useState(undefined);
  const [dayOfWeek, setDayOfWeek] = useState(undefined);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return {error: "Permission denied!"};
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let cityData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=2d1071d2a640b454a941894654415839`);
      cityData = await cityData.json();
      setCity(`${cityData.name}, ${cityData.sys.country}`);
      const date = convertTimestamp(cityData.dt);
      setDayOfWeek(date.dayOfWeek + ", " + date.date);

      const data = await fetchWeatherContent(location.coords.latitude, location.coords.longitude);
      await AsyncStorage.setItem('@weather_data', JSON.stringify(data));
      setWeatherData(data);
      setTemp(Math.round(data.current.temp));
      setIcon(getIcon(data.current.weather[0].id, data.dt, 40));
    })();

  }, []);


  return (
    <Container>
      <LoadingModal visible={loading} />

      <Div color="#70f" style={{paddingTop: 12}}>
        <Text color="#fff" size="15px">{dayOfWeek}</Text>
      </Div>

      <Div style={{marginTop: 50}}>
        <Card>
          <Title color="#666">Sua localização</Title>
          {weatherData===undefined&&city===undefined&&temp===undefined&&temp===undefined 
            ?
            <ActivityIndicator size="large" color="#4ac0ff"/>
            : <>
          <Text numberOfLines={1} color="#888">{city}</Text>
          <Div color="transparent" direction="row" justify="space-around" width="40%">
            <Text numberOfLines={1} size="30px" color="#888" style={{top: 6}}>{temp}°</Text>
            {icon}
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