import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import getCityCoords from '../../util/getCityCoords';
import fetchWeatherContent from '../../util/fetchWeatherContent';

import RecentSearch from '../../components/RecentSearch';

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
  async function search(city) {
    let coords = await getCityCoords(city);
    console.log(coords);

    const data = await fetchWeatherContent(coords.lat, coords.lon);
    // console.log(data);
    if(data) {
      console.log(data);
      navigation.navigate("ForecastRouter", {data: JSON.stringify(data)});
    }
  }

  const [inputValue, setInputValue] = useState('');

  const fakeData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <Container>
      <Div direction="row" justify="space-evenly">
        <Input autoCapitalize="words" value={inputValue} 
          onChangeText={text => setInputValue(text)}
        />
        <SearchButton onPress={() => search(inputValue)}>
          <FontAwesome5 name="search" size={24} color="#fff" />
        </SearchButton>
      </Div>

      <Div justify="flex-start">
        <Title align="left" fullWidth >Pesquisas recentes</Title>
        <List 
          contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          data={fakeData}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <RecentSearch screenWidth={Dimensions.get('window').width}/>
          )}
        />
      </Div>
    </Container>
  );
}