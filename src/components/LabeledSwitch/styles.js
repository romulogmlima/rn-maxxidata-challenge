import { Switch as BasicSwitch } from 'react-native-switch';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xl}px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const Switch = styled(BasicSwitch).attrs(({ theme }) => ({
  activeText: '',
  inActiveText: '',
  switchLeftPx: 3,
  switchRightPx: 3,
  circleBorderWidth: 3,
  backgroundActive: theme.colors.success,
}))``;
