import { Switch } from 'react-native-switch';
import styled from 'styled-components/native';

export const ContainerSwitch = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const BasicSwitch = styled(Switch).attrs(() => ({
  activeText: '',
  inActiveText: '',
}))``;

export const LabelSwitch = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
