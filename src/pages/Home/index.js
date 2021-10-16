import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView } from 'react-native';

import * as Location from 'expo-location';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Card,
  Section,
  Title,
  Text,
  Row,
  RowItem,
  Button,
  Header,
  Div,

} from './styles'

import QuickInfo from '../../components/QuickInfo';
import SelectDay from '../../components/SelectDay';
import HourlyCard from '../../components/HourlyCard';
import ConditionsDetails from '../../components/ConditionsDetails';
import SunDetails from '../../components/SunDetails';

export default function Home({ navigation }) {
  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return {error: "Permission denied!"};
    }
  
    let location = await Location.getCurrentPositionAsync({});
    return location;
  }

  const [location, setLocation] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return {error: "Permission denied!"};
    }
  
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log(location);
  })();
  }, []);


  return (
    <Container>
      {/* <Header>
        <Title>Bem Vindo</Title>
      </Header> */}

      <Div color="#70f" style={{paddingTop: 12}}>
        <Text color="#fff" size="15px">Segunda-Feira, 04/10</Text>
      </Div>

      <Div style={{marginTop: 50}}>
        <Card>
          <Title color="#666">Sua localização</Title>
          <Text numberOfLines={1} color="#888">Belo Horizonte, Brasil</Text>
          <Div color="transparent" direction="row" justify="space-around" width="40%">
            <Text numberOfLines={1} size="30px" color="#888">36°</Text>
            <Ionicons name="sunny-sharp" size={30} color="#ffa53b" style={{ top: -5 }} />
          </Div>
          <Button>
            <Text color="#fff">Ver previsão do tempo</Text>
            <AntDesign name="arrowright" size={30} color="#fff" style={{ top: -5 }} />
          </Button>
        </Card>

        <Text color="#888">OU</Text>

        <Card>
          <Button>
            <Text color="#fff">Pesquisar por uma cidade</Text>
            <AntDesign name="search1" size={25} color="#fff" style={{ top: -5 }} />
          </Button>
        </Card>
      </Div>
    </Container>
  );
}