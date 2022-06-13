import { Switch as BasicSwitch } from 'react-native-switch';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const Switch = styled(BasicSwitch).attrs(() => ({
  activeText: '',
  inActiveText: '',
  switchLeftPx: 3,
  switchRightPx: 3,
  circleBorderWidth: 3,
}))``;

export const Label = styled.Text`
  font-size: 16px;
`;
