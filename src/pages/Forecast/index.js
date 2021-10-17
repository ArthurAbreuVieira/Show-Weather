import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';

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
  let { data } = route.params;
  
  data = JSON.parse(data);

  const days = {
    today: data._W,
    tomorrow: data._W.daily[1],
    after: data._W.daily[2]
  };

  const [date, setDate] = useState(convertTimestamp(days.today.current.dt));
  const [dataOfDay, setDataOfDay] = useState(days.tomorrow);
  const [selectedDay, setSelectedDay] = useState('today');

  useEffect(() => {
    setDataOfDay(days[selectedDay]);
    if(selectedDay === "today") {
      setDate(convertTimestamp(days.today.current.dt));
    } else {
      setDate(convertTimestamp(days[selectedDay].dt));
    }
  }, [selectedDay]);

  return (
    <Container>
      <QuickInfo color="#ededed" data={dataOfDay} date={date}/>
      <SelectDay handleDay={setSelectedDay}/>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      >

      <HourlyCard navigation={navigation} data={dataOfDay} showCards={selectedDay==="today"?true:false}/>
      
      <Section>
        <Title>Details</Title>

        <ConditionsDetails data={dataOfDay}/>
        <SunDetails data={dataOfDay}/>

        <Button activeOpacity={.8} onPress={() => navigation.navigate("DailyForecast")}>
          <Title color="#fff" style={{top: -9}}>Ver previsão diária</Title>
        </Button>

      </Section>

      </ScrollView>
    </Container>
  );
}