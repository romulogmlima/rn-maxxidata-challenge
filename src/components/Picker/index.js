import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { Container, ErrorMessage, Label } from './styles';

const Picker = ({ label, error, ...otherProps }) => (
  <>
    <Label>{label}</Label>
    <Container>
      <RNPickerSelect {...otherProps} />
    </Container>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default Picker;
