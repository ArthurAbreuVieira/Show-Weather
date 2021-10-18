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

export default function Search({ navigation }) {
  const [loading, setLoading] = useState(false);

  async function search(city) {
    if(city === '') return;

    setLoading(true);
    const cityData = await getCityData(city);
    const coords = cityData.coord;

    const data = await fetchWeatherContent(coords.lat, coords.lon);
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