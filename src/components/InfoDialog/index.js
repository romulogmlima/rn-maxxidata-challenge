import React from 'react';

import Button from '../Buttons/Button';
import { ContainerButtons, Content, CustomModal, Message } from './styles';

const InfoDialog = ({
  message,
  visible,
  titlePrimaryButton,
  onPressPrimaryButton,
}) => (
  <CustomModal visible={visible} animationType="fade">
    <Content>
      <Message>{message}</Message>
      <ContainerButtons>
        <Button title={titlePrimaryButton} onPress={onPressPrimaryButton} />
      </ContainerButtons>
    </Content>
  </CustomModal>
);

export default InfoDialog;
