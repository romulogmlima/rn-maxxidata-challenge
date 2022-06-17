import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
`;

export const Label = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextField = styled(TextInputMask).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.disabled,
}))`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s}px
    ${({ theme }) => theme.spacing.s}px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const ErrorMessage = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fonts.sizes.xs}px;
`;
