import { Switch as BasicSwitch } from 'react-native-switch';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #232840;
  font-weight: bold;
`;

export const Switch = styled(BasicSwitch).attrs(() => ({
  activeText: '',
  inActiveText: '',
  switchLeftPx: 3,
  switchRightPx: 3,
  circleBorderWidth: 3,
}))``;
