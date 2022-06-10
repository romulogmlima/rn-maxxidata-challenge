import React from 'react';

import { Container, Icon, Title } from './styles';

const MenuButton = ({ title, icon, onPress }) => (
  <Container onPress={onPress}>
    <Icon name={icon} />
    <Title>{title}</Title>
  </Container>
);

export default MenuButton;
