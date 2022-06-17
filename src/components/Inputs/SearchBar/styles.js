import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.disabled,
}))`
  width: 100%;
  padding: 16px 16px;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
`;
