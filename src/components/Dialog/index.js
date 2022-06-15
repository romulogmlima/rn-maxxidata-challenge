import React from 'react';
import { View } from 'react-native';

import Button from '../Buttons/Button';
import { ContainerButtons, Content, Container, Message } from './styles';

const Dialog = ({
  visible,
  titleSecondaryButton,
  onPressSecondaryButton,
  titlePrimaryButton,
  onPressPrimaryButton,
}) => (
  <Container visible={visible} animationType="fade">
    <Content>
      <Message>{`Deseja deletar o\n registro?`}</Message>
      <ContainerButtons>
        <View style={{ flex: 1, marginRight: 20 }}>
          <Button
            title={titleSecondaryButton}
            onPress={onPressSecondaryButton}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button title={titlePrimaryButton} onPress={onPressPrimaryButton} />
        </View>
      </ContainerButtons>
    </Content>
  </Container>
);

export default Dialog;
