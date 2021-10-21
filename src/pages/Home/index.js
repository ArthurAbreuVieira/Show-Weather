import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import * as Location from 'expo-location';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import { ThemeProvider } from 'styled-components';

import fetchWeatherContent from '../../util/fetchWeatherContent';
import convertTimestamp from '../../util/convertTimestamp';

import LoadingModal from '../../components/LoadingModal';
import getIcon from '../../util/getIcon';
import CardError from '../../components/CardError';

import {
  Container,
  Card,
  Title,
  Text,
  Button,
  Div,
} from './styles'

export default function Home({ navigation, route }) {
  const [weatherData, setWeatherData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [loadingCard, setLoadingCard] = useState(true);
  const [city, setCity] = useState(undefined);
  const [temp, setTemp] = useState(undefined);
  const [icon, setIcon] = useState(undefined);
  const [dayOfWeek, setDayOfWeek] = useState(undefined);
  const [error, setError] = useState(false);
  
  const { theme } = route.params;
  
  async function getInitialData() {
    const location = await Location.getCurrentPositionAsync({});

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=4bec4cbd5ebabb1dd0761710edc0aed0`;

    let cityData;

    try {
      cityData = await fetch(URL);
      cityData = await cityData.json();
    } catch (error) {
      setLoadingCard(false);
      setError(true);
      return;
    }

    if (cityData.cod && cityData.message) {
      setLoadingCard(false);
      setError(true);
      return;
    }

    const date = convertTimestamp(location.timestamp / 1000);

    setCity(`${cityData.name}, ${cityData.sys.country}`);
    setDayOfWeek(date.dayOfWeek + ", " + date.date);

    let data;

    try {
      data = await fetchWeatherContent(location.coords.latitude, location.coords.longitude, 'e50d4ab173127d71070357e5512b6079');
    } catch (error) {
      setLoadingCard(false);
      setError(true);
      return;
    }

    if (data.cod && data.message) {
      setLoadingCard(false);
      setError(true);
      return;
    }

    setWeatherData(data);
    setTemp(Math.round(data.current.temp));
    setIcon(getIcon(data.current.weather[0].id, data.dt, 40));

    setLoadingCard(false);
  }

  async function requestLocationPermission() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setError(true);
    }
  }

  async function bootstrap() {
    setLoadingCard(true);
    setError(false);
    setWeatherData(undefined);
    setCity(undefined);
    setTemp(undefined);
    setIcon(undefined);

    await requestLocationPermission();

    await getInitialData();
  }

  useEffect(() => {
    bootstrap();
  }, []);


  return (
    <ThemeProvider theme={{t:theme}}>
      <Container>
        <LoadingModal visible={loading} />

        <Div color="#70f" style={{ paddingTop: 12 }}>
          {dayOfWeek === undefined ?
            <ActivityIndicator size="large" color="#fff" style={{ top: -5 }} />
            :
            <Text color="#fff" size="15px">{dayOfWeek}</Text>}
        </Div>

        <Div style={{ marginTop: 50 }} color="transparent">

          {error ?
            <CardError reload={bootstrap} />
            :
            <Card height="200px">
              <Title color={theme==='dark'?"#ccc":"#666"}>
                Sua localização
              </Title>

              {loadingCard ?
                <ActivityIndicator size="large" color="#4ac0ff" />
                :
                <>
                  <Text numberOfLines={1} color={theme==='dark'?"#ddd":"#888"}>
                    {city}
                  </Text>
                  <Div 
                    color="transparent" 
                    direction="row" 
                    justify="space-around" 
                    width="40%"
                  >
                    <Text 
                      numberOfLines={1} 
                      size="30px" 
                      color={theme==='dark'?"#ddd":"#888"} 
                      style={{ top: 6 }}
                    >
                      {temp}°
                    </Text>

                    {icon}
                  </Div>

                  <Button onPress={() => {
                      setLoading(true);
                      navigation.navigate("ForecastRouter", { 
                        data: JSON.stringify(weatherData), 
                        location: city, 
                        theme 
                      });
                      setLoading(false);
                    }}
                  >
                    <Text color="#fff">Ver previsão do tempo</Text>
                    <AntDesign 
                      name="arrowright" 
                      size={30} 
                      color="#fff" 
                      style={{ top: -5 }} 
                    />
                  </Button>
                </>}

            </Card>}

          <Text color={theme==='dark'?"#ddd":"#888"}>OU</Text>

          <Card>
            <Button onPress={() => navigation.navigate("Search", {theme})}>
              <Text color="#fff">Pesquisar por uma cidade</Text>
              <AntDesign 
                name="search1" 
                size={25} 
                color="#fff" 
                style={{ top: -5 }} 
              />
            </Button>
          </Card>

          <Button 
            color={theme==='dark'?'#ededed':'#444'} 
            onPress={() => {
              navigation.setOptions({
                tabBarStyle: {
                  backgroundColor: theme==='dark'?'#ededed':'#444',
                  height: 55,
                  borderTopColor: '#555',
                },
                tabBarInactiveTintColor: '#888',
                headerStyle: {
                  backgroundColor: theme==='dark'?'#ededed':'#444',
                  elevation: 10,
                }
              });
              navigation.setParams({theme:theme==='dark'?'light':'dark'})
            }}
          >
            <Text color={theme==='dark'?'#444':'#ededed'}>
              Alterar para tema {theme==="dark"?"claro":"escuro"}
            </Text>
            <FontAwesome5 
              name="exchange-alt"
              size={24} 
              color={theme==='dark'?'#444':'#ededed'} 
              style={{ top: -5 }} 
            />
          </Button>

        </Div>
      </Container>
    </ThemeProvider>
  );
}