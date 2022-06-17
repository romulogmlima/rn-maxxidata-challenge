import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const PickerContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.xxs}px
    ${({ theme }) => theme.spacing.xs}px;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.fonts.sizes.xs}px;
`;
