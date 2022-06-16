import { RFValue } from 'react-native-responsive-fontsize';
import { Switch as BasicSwitch } from 'react-native-switch';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 30px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
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
