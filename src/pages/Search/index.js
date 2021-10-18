import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { FontAwesome5 } from '@expo/vector-icons';

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
  Row,
  RowItem,
  Button,
  SearchButton,
  Div,
} from './styles';
import SearchError from '../../components/SearchError';

export default function Search({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastAttempt, setLastAttempt] = useState('');

  async function search(city) {
    if(city === '') return;
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

    if(cityData.cod == 404) {
      setLoading(false);
      setError(true);
      setErrorMessage("Cidade não encontrada")
      return;
    }

    const coords = cityData.coord;

    let data;
    try {
      data = await fetchWeatherContent(coords.lat, coords.lon);
    } catch (error) {
      setError(true);
      setErrorMessage("Erro ao obter dados da pesquisa");
    }

    if(data.cod && data.message) {
      setLoading(false);
      setError(true);
      setErrorMessage("Erro ao obter dados da pesquisa");
      return;
    }

    // console.log(data);
    if(data) {
      let historyData = JSON.parse(await AsyncStorage.getItem('@history')) || [];
      const hasCity = historyData.some(item => item.city === city);
      if(!hasCity) {
        if (historyData.length > 3) historyData.pop();
        historyData.unshift({
          city,
          coords
        });
        await AsyncStorage.setItem('@history', JSON.stringify(historyData));
      }
      // await AsyncStorage.setItem('@history', JSON.stringify([]));
      setLoading(false);
      setError(false);
      setErrorMessage("");
      navigation.navigate("ForecastRouter", {data: JSON.stringify(data), location: `${cityData.name}, ${cityData.sys.country}`});
    }
  }

  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    (async()=>{
      setHistory(JSON.parse(await AsyncStorage.getItem('@history')) || []);
    })();
  }, [history]);

  return (
    <Container>
      <LoadingModal visible={loading} />
      <SearchError message={errorMessage} visible={error} setVisible={setError}
        reload={()=>search(lastAttempt)}
      />

      <Div direction="row" justify="space-evenly">
        <Input autoCapitalize="words" value={inputValue} 
          onChangeText={text => setInputValue(text)}
        />
        <SearchButton onPress={async() => await search(inputValue)}>
          <FontAwesome5 name="search" size={24} color="#fff" />
        </SearchButton>
      </Div>

      <Div justify="flex-start">
        <Title align="left" fullWidth >Pesquisas recentes</Title>
        <List 
          contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}}
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
        />
      </Div>
    </Container>
  );
}