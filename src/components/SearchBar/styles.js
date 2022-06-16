import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput).attrs(() => ({
  placeholderTextColor: '#BABABA',
}))`
  width: 100%;
  padding: 18px 16px;
  background-color: #ffffff;
  color: #000;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: 16px;
`;
