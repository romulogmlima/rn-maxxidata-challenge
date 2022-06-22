import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.disabled,
}))`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s}px
    ${({ theme }) => theme.spacing.s}px;
  border-radius: 10px;
  margin-bottom: ${({ theme }) => theme.spacing.m}px;
  font-size: ${({ theme }) => theme.fonts.size.s}px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.weight.medium};
`;
