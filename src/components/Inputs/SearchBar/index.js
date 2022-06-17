import React from 'react';

import { Container } from './styles';

const SearchBar = ({ placeholder, value, onChangeText }) => (
  <Container
    value={value}
    placeholder={placeholder}
    onChangeText={onChangeText}
  />
);

export default SearchBar;
