import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  //background-color: red;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  font-size: 16px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 5px;
  font-size: 12px;
`;

export const TextField = styled(TextInput).attrs(() => ({
  placeholderTextColor: '#BABABA',
}))`
  width: 100%;
  padding: 15px 15px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  font-size: 16px;
`;
