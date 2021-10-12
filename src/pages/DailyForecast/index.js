import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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

export default function DailyForecast() {
  const data = [0,1,2,3,4,5,6];
  const [dataIndex, setDataIndex] = useState(0);

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
          onPress={() => dataIndex>=0?setDataIndex(dataIndex-1):dataIndex}
        >
          <MaterialCommunityIcons name="arrow-left-drop-circle" size={24} color="#49577a" />
          <Text size="12px">04/10</Text>
        </Button>}
        {dataIndex < data.length-1 &&
        <Button color="transparent" right 
          onPress={() => dataIndex<=data.length-1?setDataIndex(dataIndex+1):dataIndex}
        >
          <MaterialCommunityIcons name="arrow-right-drop-circle" size={24} color="#49577a" />
          <Text size="12px">06/10</Text>
        </Button>}
      </Div>

      <QuickInfo color="#ededed" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Row style={{justifyContent: 'center',marginTop: 5}}>
            <Text>Poucas nuvens</Text>
        </Row>

        <ConditionsDetails />

        <Div>
          <Title>Sensação termica</Title>
          <Row>
            <RowItem>
              <Text>Diurna</Text>
              <Text color="#aaa" >25°</Text>
            </RowItem>
            <RowItem>
              <Text>Noturna</Text>
              <Text color="#aaa" >10°</Text>
            </RowItem>
          </Row>
        </Div>

        <Temperature />
        <SunDetails />
        <MoonDetails />
      </ScrollView>
    </Container>
  );
}