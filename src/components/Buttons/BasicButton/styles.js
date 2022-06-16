import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ disabled }) => (disabled ? '#C7C7C7' : '#232840')};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: #ffffff;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(() => ({
  size: 25,
  color: '#ffffff',
}))``;
