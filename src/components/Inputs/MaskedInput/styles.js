import { TextInputMask } from 'react-native-masked-text';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: #232840;
`;

export const TextField = styled(TextInputMask).attrs(() => ({
  placeholderTextColor: '#BABABA',
}))`
  width: 100%;
  padding: 15px 15px;
  color: #000;
  border-radius: 10px;
  font-size: ${RFValue(14)}px;
  background-color: #ffffff;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 5px;
  font-size: ${RFValue(12)}px;
`;
