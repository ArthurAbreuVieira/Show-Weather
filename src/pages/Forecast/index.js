import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { ThemeProvider } from 'styled-components';

import convertTimestamp from '../../util/convertTimestamp';

import {
  Container,
  Section,
  Title,
  Button,
} from './styles'

import QuickInfo from '../../components/QuickInfo';
import SelectDay from '../../components/SelectDay';
import HourlyCard from '../../components/HourlyCard';
import ConditionsDetails from '../../components/ConditionsDetails';
import SunDetails from '../../components/SunDetails';

export default function Forecast({ navigation, route }) {
  let { data, location, theme } = route.params;
  data = JSON.parse(data);

  const days = {
    today: data,
    tomorrow: data.daily[1],
    after: data.daily[2]
  };

  const [date, setDate] = useState(convertTimestamp(days.today.current.dt));
  const [dataOfDay, setDataOfDay] = useState(days.tomorrow);
  const [selectedDay, setSelectedDay] = useState('today');

  useEffect(() => {
    setDataOfDay(days[selectedDay]);

    if (selectedDay === "today") {
      setDate(convertTimestamp(days.today.current.dt));
    } else {
      setDate(convertTimestamp(days[selectedDay].dt));
    }
  }, [selectedDay]);

  return (
    <ThemeProvider theme={{ t: theme }}>
      <Container>
        <QuickInfo 
          color="#ededed" 
          data={dataOfDay} 
          date={date} 
          location={location} 
        />

        <SelectDay handleDay={setSelectedDay} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          {selectedDay === "today" &&
            <HourlyCard navigation={navigation} data={dataOfDay} theme={theme}/>}

          <Section>
            <Title>Detalhes</Title>

            <ConditionsDetails data={dataOfDay}/>
            <SunDetails data={dataOfDay}/>

            <Button 
              activeOpacity={.8} 
              onPress={() => navigation.navigate("DailyForecast")}
            >
              <Title color="#fff" style={{ top: -9 }}>
                  Ver previs??o di??ria
              </Title>
            </Button>

          </Section>
        </ScrollView>
        
      </Container>
    </ThemeProvider>
  );
}