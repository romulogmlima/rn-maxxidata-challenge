import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
`;

export const Label = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.fonts.size.s}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.weight.bold};
`;

export const TextField = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.disabled,
}))`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s}px
    ${({ theme }) => theme.spacing.s}px;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fonts.size.s}px;
  background-color: ${({ theme }) => theme.colors.inputs};
  font-family: ${({ theme }) => theme.fonts.weight.medium};
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.fonts.size.xs}px;
`;
