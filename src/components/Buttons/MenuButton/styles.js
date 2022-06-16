import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  padding: 15px;
  justify-content: space-between;
  background-color: #232840;
`;

export const Label = styled.Text`
  font-size: ${RFValue(20)}px;
  color: #ffffff;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(22)}px;
  color: #ffb726;
`;
