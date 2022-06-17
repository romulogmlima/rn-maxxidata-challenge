import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const List = styled.FlatList``;

export const EmptyListMessage = styled.Text`
  color: #232840;
  text-align: center;
  font-size: ${RFValue(16)}px;
  margin-top: 20px;
`;
