import React from 'react';
import { View } from 'react-native';

import BasicButton from '../../Buttons/BasicButton';
import { ContainerButtons, Content, Container, Message } from './styles';

const ConfirmDialog = ({
  visible,
  message,
  titleSecondaryButton,
  onPressSecondaryButton,
  titlePrimaryButton,
  onPressPrimaryButton,
}) => (
  <Container visible={visible} animationType="fade">
    <Content>
      <Message>{message}</Message>
      <ContainerButtons>
        <View style={{ flex: 1, marginRight: 20 }}>
          <BasicButton
            title={titleSecondaryButton}
            onPress={onPressSecondaryButton}
          />
        </View>
        <View style={{ flex: 1 }}>
          <BasicButton
            title={titlePrimaryButton}
            onPress={onPressPrimaryButton}
          />
        </View>
      </ContainerButtons>
    </Content>
  </Container>
);

export default ConfirmDialog;
