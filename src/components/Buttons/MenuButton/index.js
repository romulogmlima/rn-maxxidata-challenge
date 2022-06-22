import React from 'react';

import { Container, Icon, Label } from './styles';

const MenuButton = ({ title, icon, onPress }) => (
  <Container onPress={onPress}>
    <Icon name={icon} />
    <Label>{title}</Label>
  </Container>
);

export default MenuButton;
