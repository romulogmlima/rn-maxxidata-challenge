import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #232840;
`;

export const TextField = styled(TextInput).attrs(() => ({
  placeholderTextColor: '#BABABA',
}))`
  width: 100%;
  padding: 15px 15px;
  color: #000;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ffffff;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 5px;
  font-size: 12px;
`;
