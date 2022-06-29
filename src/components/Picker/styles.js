import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.fonts.size.s}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.weight.bold};
`;

export const PickerContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inputs};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.xxs}px
    ${({ theme }) => theme.spacing.xs}px;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.fonts.size.xs}px;
`;
