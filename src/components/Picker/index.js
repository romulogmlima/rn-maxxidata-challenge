import React from 'react';

import { Container, CustomPicker, ErrorMessage, Label } from './styles';

const Picker = ({ label, error, ...otherProps }) => (
  <>
    <Label>{label}</Label>
    <Container>
      <CustomPicker {...otherProps} />
    </Container>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default Picker;
