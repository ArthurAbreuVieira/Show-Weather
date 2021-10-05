import React from 'react';
import { ScrollView } from 'react-native';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Section,
  Title,
  Text,
  Row,
  RowItem,
  Button,
} from './styles'

import Temperature from '../../components/Temperature';
import SelectDay from '../../components/SelectDay';
import HourlyCard from '../../components/HourlyCard';

export default function Home({ navigation }) {
  return (
    <Container>
      {/* <Header>
        <Title>Bem Vindo</Title>
      </Header> */}
      <Temperature />
      <SelectDay />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      >

      <HourlyCard navigation={navigation} />

      <Section>
        <Title>Details</Title>

        <Row card style={{marginBottom: 25}}>
          <RowItem column center >
            <Text>Nascer do sol</Text>
            <Feather name="sunrise" size={30} color="orangered" />
            <Text color="#888" >5:00</Text>
          </RowItem>
          <RowItem column center >
            <Text>Por do sol</Text>
            <MaterialCommunityIcons name="weather-sunset" size={30} color="orangered" />
            <Text color="#888" >18:30</Text>
          </RowItem>
        </Row>

        <Row>
          <RowItem>
            <Text>Wind</Text>
            <Text color="#aaa" >12 m/h</Text>
          </RowItem>
          <RowItem>
            <Text>Humidity</Text>
            <Text color="#aaa" >55%</Text>
          </RowItem>
        </Row>

        <Row>
          <RowItem>
            <Text>Visibility</Text>
            <Text color="#aaa" >25 km</Text>
          </RowItem>
          <RowItem>
            <Text>UV</Text>
            <Text color="#aaa" >1</Text>
          </RowItem>
        </Row>


        <Button activeOpacity={.8} onPress={() => navigation.navigate("DailyForecast")}>
          <Title color="#fff">Ver previsão diária</Title>
        </Button>

      </Section>

      </ScrollView>
    </Container>
  );
}