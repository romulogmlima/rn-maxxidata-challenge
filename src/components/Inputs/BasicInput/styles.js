import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
`;

export const Label = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextField = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.disabled,
}))`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s}px
    ${({ theme }) => theme.spacing.s}px;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.fonts.sizes.xs}px;
`;
