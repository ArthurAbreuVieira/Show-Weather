import React from 'react';

import {
  Container,
  ScrollContainer,
  Header,
  Title,
  Card,
} from './styles'

import Temperature from '../../components/Temperature';

export default function Home() {
  return (
    <Container>
      {/* <Header>
        <Title>Bem Vindo</Title>
      </Header> */}
      <Temperature />
    </Container>
  );
}