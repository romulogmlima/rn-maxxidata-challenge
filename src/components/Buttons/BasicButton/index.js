import React from 'react';

import { Container, LoadingIndicator, Label } from './styles';

const BasicButton = ({ title, onPress, isLoading, isDisabled }) => (
  <Container onPress={onPress} disabled={isDisabled}>
    {isLoading ? <LoadingIndicator /> : <Label>{title}</Label>}
  </Container>
);

export default BasicButton;
