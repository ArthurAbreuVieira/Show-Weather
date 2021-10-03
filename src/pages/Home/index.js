import React from 'react';

import {
  Container,
  ScrollContainer,
  Header,
  Title,
  Card,
} from './styles'

import Temperature from '../../components/Temperature';
import SelectDay from '../../components/SelectDay';
import HourlyCard from '../../components/HourlyCard';

export default function Home() {
  return (
    <Container>
      {/* <Header>
        <Title>Bem Vindo</Title>
      </Header> */}
      <Temperature />
      <SelectDay />
      <HourlyCard />
    </Container>
  );
}