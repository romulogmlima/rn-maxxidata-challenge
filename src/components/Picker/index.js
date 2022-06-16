import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { PickerContainer, ErrorMessage, Label, Container } from './styles';

const Picker = ({ label, error, ...otherProps }) => (
  <Container>
    <Label>{label}</Label>
    <PickerContainer>
      <RNPickerSelect {...otherProps} />
    </PickerContainer>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Container>
);

export default Picker;
