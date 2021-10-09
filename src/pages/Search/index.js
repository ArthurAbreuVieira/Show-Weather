import React from 'react';
import { ScrollView } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

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
        <Input autoCapitalize="words"/>
        <SearchButton onPress={() => navigation.navigate("Forecast")}>
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
            renderItem={({ item }) => <RecentSearch />}
          />
      </Div>
    </Container>
  );
}