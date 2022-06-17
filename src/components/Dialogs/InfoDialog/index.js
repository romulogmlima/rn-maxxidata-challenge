import React from 'react';

import BasicButton from '../../Buttons/BasicButton';
import { ContainerButton, Content, Container, Message } from './styles';

const InfoDialog = ({ message, visible, titleButton, onPress }) => (
  <Container visible={visible} animationType="fade">
    <Content>
      <Message>{message}</Message>
      <ContainerButton>
        <BasicButton title={titleButton} onPress={onPress} />
      </ContainerButton>
    </Content>
  </Container>
);

export default InfoDialog;
