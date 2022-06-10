import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput).attrs(() => ({
  placeholderTextColor: '#BABABA',
}))`
  width: 100%;
  padding: 18px 16px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  margin-bottom: 16px;
  font-size: 14px;
`;
