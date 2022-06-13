import React from 'react';

import { Container, ErrorMessage, Label, TextField } from './styles';

const Input = ({ label, error, ...otherProps }) => (
  <Container>
    <Label>{label}</Label>
    <TextField {...otherProps} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Container>
);

export default Input;
