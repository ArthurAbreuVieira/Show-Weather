import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Option,
} from './styles';

export default function SelectDay() {
  return (
    <Container>
      <Option focused={true}>Today</Option>
      <Option focused={false}>Tomorrow</Option>
      <Option focused={false}>After</Option>
    </Container>
  );
}