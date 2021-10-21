import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { ThemeProvider } from 'styled-components';

import getCityData from '../../util/getCityData';
import fetchWeatherContent from '../../util/fetchWeatherContent';

import RecentSearch from '../../components/RecentSearch';
import LoadingModal from '../../components/LoadingModal';

import {
  Container,
  Input,
  List,
  Title,
  Text,
  SearchButton,
  ActionButton,
  Div,
} from './styles';
import SearchError from '../../components/SearchError';

export default function Search({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastAttempt, setLastAttempt] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);  

  const { theme } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: theme==='dark'?'#444':'#ededed',
        elevation: 10,
      }
    });
  });

  async function clearHistory() {
    setLoading(true);
    await AsyncStorage.setItem('@history', JSON.stringify([]));
    reloadHistory();
  }

  async function reloadHistory() {
    setHistory(JSON.parse(await AsyncStorage.getItem('@history')) || []);
  }

  async function search(city) {
    if (city === '') return;

    setLastAttempt(city);
    setError(false);
    setLoading(true);
    setErrorMessage("");

    let cityData;

    try {
      cityData = await getCityData(city);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage("Erro ao obter dados da pesquisa");
      return;
    }

    if (cityData?.cod == 404) {
      setLoading(false);
      setError(true);
      setErrorMessage("Cidade não encontrada")
      return;
    }

    const coords = cityData.coord;

    let data;
    try {
      data = await fetchWeatherContent(coords.lat, coords.lon, '9b8ccf107cbd573f67e35d2219bd2cb9');
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage("Erro ao obter dados da pesquisa");
    }

    if (data?.cod && data?.message) {
      setLoading(false);
      setError(true);
      setErrorMessage("Erro ao obter dados da pesquisa");
      return;
    }

    if (data) {
      const historyData = JSON.parse(await AsyncStorage.getItem('@history')) || [];
      const hasCity = historyData.some(item => item.city === city);
      if (!hasCity) {
        if (historyData.length > 3) historyData.pop();
        historyData.unshift({
          city,
          coords
        });

        await AsyncStorage.setItem('@history', JSON.stringify(historyData));
      }

      setLoading(false);
      setError(false);
      setErrorMessage("");
      
      navigation.navigate("ForecastRouter", { 
        data: JSON.stringify(data), 
        location: `${cityData.name}, ${cityData.sys.country}`
      });
    }
  }

  useEffect(() => {
    reloadHistory();
  }, []);

  return (
    <ThemeProvider theme={{ t: theme }}>
      <Container>
        <LoadingModal visible={loading} />
        <SearchError 
          message={errorMessage} 
          visible={error} 
          setVisible={setError}
          reload={() => search(lastAttempt)}
        />

        <Div direction="row" justify="space-evenly">
          <Input 
            autoCapitalize="words" 
            value={inputValue}
            onChangeText={text => setInputValue(text)}
          />
          <SearchButton onPress={async () => await search(inputValue)}>
            <FontAwesome5 name="search" size={24} color="#fff" />
          </SearchButton>
        </Div>

        <Div justify="flex-start">
          <Div 
            justify="space-evenly" 
            direction="row" 
            width="100%"
          >
            <Title align="left" fullWidth >Pesquisas recentes</Title>

            <Div 
              justify="space-around" 
              direction="row" 
              width="30%"
              position="absolute"
              right="20px"
              top="-5px"
            >
              <ActionButton onPress={async () => {
                  reloadHistory();
                  setLoading(false);
                }}
              >
                <Ionicons name="reload" size={24} color="#4ac0ff" />
              </ActionButton>

              {history.length > 0 &&
                <ActionButton onPress={async () => {
                    await clearHistory();
                    setLoading(false);
                  }}
                >
                  <FontAwesome5 name="trash-alt" size={24} color="#f00" />
                </ActionButton>
              }
            </Div>

          </Div>
          {history.length > 0 ?
            <List
              contentContainerStyle={{ 
                justifyContent: 'flex-start', alignItems: 'center' 
              }}
              showsVerticalScrollIndicator={false}
              data={history}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <RecentSearch
                  city={item.city}
                  coords={item.coords}
                  search={() => search(item.city)}
                  screenWidth={Dimensions.get('window').width}
                />
              )}
            /> :
            <Div 
              justify="center" 
              direction="row" 
              width="100%" 
              height="70%"
            >
              <Text color="#888">Você não tem pesquisas no histórico</Text>
            </Div>}
        </Div>
      </Container>
    </ThemeProvider>
  );
}