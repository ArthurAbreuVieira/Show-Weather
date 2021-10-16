import React, { useEffect, useState } from 'react';
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

export default function Forecast({ navigation, route }) {
  const { data } = route.params;
  const days = {
    today: data,
    tomorrow: data.daily[0],
    after: data.daily[1]
  }
  const [dataOfDay, setDataOfDay] = useState(days.today);
  const [selectedDay, setSelectedDay] = useState('today');

  useEffect(() => {
    setDataOfDay(days[selectedDay]);
  }, [selectedDay]);

  return (
    <Container>
      <QuickInfo color="#ededed" data={dataOfDay}/>
      <SelectDay handleDay={setSelectedDay}/>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      >

      <HourlyCard navigation={navigation} data={dataOfDay}/>
      
      <Section>
        <Title>Details</Title>

        <ConditionsDetails data={dataOfDay}/>
        <SunDetails data={data.current}/>

        <Button activeOpacity={.8} onPress={() => navigation.navigate("DailyForecast")}>
          <Title color="#fff" style={{top: -9}}>Ver previsão diária</Title>
        </Button>

      </Section>

      </ScrollView>
    </Container>
  );
}