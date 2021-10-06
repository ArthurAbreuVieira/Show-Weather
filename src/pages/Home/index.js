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

import QuickInfo from '../../components/QuickInfo';
import SelectDay from '../../components/SelectDay';
import HourlyCard from '../../components/HourlyCard';
import ConditionsDetails from '../../components/ConditionsDetails';
import SunDetails from '../../components/SunDetails';

export default function Home({ navigation }) {
  return (
    <Container>
      {/* <Header>
        <Title>Bem Vindo</Title>
      </Header> */}
      <QuickInfo color="#ededed"/>
      <SelectDay />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      >

      <HourlyCard navigation={navigation} />
      
      <Section>
        <Title>Details</Title>

        <ConditionsDetails />
        <SunDetails />

        <Button activeOpacity={.8} onPress={() => navigation.navigate("DailyForecast")}>
          <Title color="#fff">Ver previsão diária</Title>
        </Button>

      </Section>

      </ScrollView>
    </Container>
  );
}