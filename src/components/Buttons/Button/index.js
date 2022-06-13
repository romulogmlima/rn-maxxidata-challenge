import React from 'react';

import { Container, CustomActivityIndicator, Title } from './styles';

const Button = ({ title, onPress, isLoading, isDisabled }) => (
  <Container onPress={onPress} disabled={isDisabled}>
    {isLoading ? <CustomActivityIndicator /> : <Title>{title}</Title>}
  </Container>
);

export default Button;
