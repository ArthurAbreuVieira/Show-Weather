import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import convertTimestamp from '../../util/convertTimestamp';

import QuickInfo from '../../components/QuickInfo'
import ConditionsDetails from '../../components/ConditionsDetails'
import SunDetails from '../../components/SunDetails'
import MoonDetails from '../../components/MoonDetails'
import Temperature from '../../components/Temperature'

import {
  Container,
  Div,
  List,
  Title,
  Text,
  Row,
  RowItem,
  Button,
} from './styles'

export default function DailyForecast({ route }) {
  function changeDataOfDay(page) {
    if(page === "previous") {
      if(dataIndex <= 0) return;
      setCurrentData(data[dataIndex-1]);
      setDataIndex(dataIndex-1);
      setPreviousDate(convertTimestamp(data[dataIndex-1].dt, "subtract_day"));
      setNextDate(convertTimestamp(data[dataIndex-1].dt, "add_day"));
    }else if(page === "next") {
      if(dataIndex >= data.length-1) return;
      setCurrentData(data[dataIndex+1]);
      setDataIndex(dataIndex+1);
      setPreviousDate(convertTimestamp(data[dataIndex+1].dt, "subtract_day"));
      setNextDate(convertTimestamp(data[dataIndex+1].dt, "add_day"));
    }
  }  

  let { data } = route.params;
  
  data = JSON.parse(data).daily;

  const [currentData, setCurrentData] = useState(data[0]);
  const [dataIndex, setDataIndex] = useState(0);
  const [previousDate, setPreviousDate] = useState(convertTimestamp(currentData.dt, "subtract_day"));
  const [nextDate, setNextDate] = useState(convertTimestamp(currentData.dt, "add_day"));
  
  console.log(currentData);

  const description = currentData.weather[0].description;

  return (
    <Container>
      <Div 
        position="absolute" 
        hover 
        color="transparent" 
        direction="row" 
        justify="space-between" 
        height="200px"
      >
        {dataIndex >=1 &&
        <Button color="transparent" left 
          onPress={() => {
            changeDataOfDay("previous");
          }}
        >
          <MaterialCommunityIcons name="arrow-left-drop-circle" size={24} color="#49577a" />
          <Text size="12px">{previousDate.date}</Text>
        </Button>}
        {dataIndex < data.length-1 &&
        <Button color="transparent" right 
          onPress={() => {
            changeDataOfDay("next");
          }}
        >
          <MaterialCommunityIcons name="arrow-right-drop-circle" size={24} color="#49577a" />
          <Text size="12px">{nextDate.date}</Text>
        </Button>}
      </Div>

      <QuickInfo color="#ededed" data={currentData} date={convertTimestamp(currentData.dt)} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Row style={{justifyContent: 'center',marginTop: 5}}>
            <Text>{description.charAt(0).toUpperCase()+description.substr(1, description.length-1)}</Text>
        </Row>

        <ConditionsDetails data={currentData}/>

        <Div>
          <Title>Sensação termica</Title>
          <Row>
            <RowItem>
              <Text>Diurna</Text>
              <Text color="#aaa" >{Math.round(currentData.feels_like.day)}°</Text>
            </RowItem>
            <RowItem>
              <Text>Noturna</Text>
              <Text color="#aaa" >{Math.round(currentData.feels_like.eve)}°</Text>
            </RowItem>
          </Row>
        </Div>

        <Temperature data={currentData.temp}/>
        <SunDetails data={currentData}/>
        <MoonDetails data={currentData}/>
      </ScrollView>
    </Container>
  );
}