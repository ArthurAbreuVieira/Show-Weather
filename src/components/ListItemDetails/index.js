import React from 'react';

import ConditionsDetails from '../ConditionsDetails';

import {
  Container,
  Text,
  Row,
  RowItem,
} from './styles'

export default function ListItemDetails({ data }) {
  const description = data.weather[0].description;

  return (
    <Container>
      <ConditionsDetails data={data}/>

      <Row card style={{top: -20}}>
        <RowItem column large >
          <Text>
            {description.charAt(0).toUpperCase()+description.substr(1, description.length-1)}
          </Text>
        </RowItem>
      </Row>
    </Container>
  );
}