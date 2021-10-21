import React from 'react';
import { Modal } from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Card,
  Title,
  Text,
  Button,
  Div,

} from './styles'

export default function SearchError({ visible, setVisible, message, reload }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Container>
        <Card>
          <Title>{message}</Title>
          <Div color="transparent" direction="column" justify="center" width="100%">

            {message === "Cidade não encontrada" &&
              <MaterialIcons name="error" size={70} color="orangered" style={{marginTop: 20}}/>}

            {message === "Erro ao obter dados da pesquisa" &&
              <Button onPress={reload}>
                <Text color="#fff">Tentar novamente</Text>
                <Ionicons name="reload" size={30} color="#fff" style={{ top: -6 }} />
              </Button>}

            <Button color="transparent" style={{marginTop: 0}} onPress={()=>setVisible(false)}>
              <Title color="#f00" style={{
                fontSize: 18,
                borderBottomColor: "red",
                borderBottomWidth: 2,
              }}> FECHAR </Title>

            </Button>

          </Div>
        </Card>       
      </Container>
    </Modal>
  );
}