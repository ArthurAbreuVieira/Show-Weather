import React, { useState } from 'react';

import {
  Container,
  Option,
  OptionText,
} from './styles';

export default function SelectDay() {
  const [focus, setFocus] = useState('today');

  return (
    <Container>
      <Option activeOpacity={.7} onPress={()=>setFocus('today')}>
        <OptionText focused={focus==='today'?true:false} >Today</OptionText>
      </Option>
      <Option activeOpacity={.7} onPress={()=>setFocus('tomorrow')}>
        <OptionText focused={focus==='tomorrow'?true:false} >Tomorrow</OptionText>
      </Option>
      <Option activeOpacity={.7} onPress={()=>setFocus('after')}>
        <OptionText focused={focus==='after'?true:false} >After</OptionText>
      </Option>
    </Container>
  );
}