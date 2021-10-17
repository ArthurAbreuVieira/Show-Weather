import React from 'react';
import { ActivityIndicator, Modal, StatusBar } from 'react-native';

import { Container } from './styles';

export default function LoadingModal({ visible }) {
  return (
    <>
      <StatusBar hidden/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        <Container>
          <ActivityIndicator size="large" color="#4ac0ff"/>
        </Container>
      </Modal>
    </>
  );
}