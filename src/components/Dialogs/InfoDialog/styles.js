import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Content = styled.View`
  flex: 1;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  width: 100%;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 25px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(28)}px;
  font-weight: bold;
  text-align: center;
`;
