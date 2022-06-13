import React from 'react';

import { Container, Label, Switch } from './styles';

const FormLabeledSwitch = ({ label, value, onValueChange }) => (
  <Container>
    <Label>{label}</Label>
    <Switch value={value} onValueChange={onValueChange} />
  </Container>
);

export default FormLabeledSwitch;
