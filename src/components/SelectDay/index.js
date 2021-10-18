import React, { useState } from 'react';

import {
  Container,
  Option,
  OptionText,
} from './styles';

export default function SelectDay({ handleDay }) {
  const [focus, setFocus] = useState('today');

  return (
    <Container>
      <Option activeOpacity={.7} onPress={()=>{
        setFocus('today');
        handleDay("today");
      }}>
        <OptionText focused={focus==='today'?true:false} >Hoje</OptionText>
      </Option>
      <Option activeOpacity={.7} onPress={()=>{
        setFocus('tomorrow');
        handleDay("tomorrow");
      }}>
        <OptionText focused={focus==='tomorrow'?true:false} >Amanhã</OptionText>
      </Option>
      <Option activeOpacity={.7} onPress={()=>{
        setFocus('after');
        handleDay("after");
    }}>
        <OptionText focused={focus==='after'?true:false} >Depois</OptionText>
      </Option>
    </Container>
  );
}