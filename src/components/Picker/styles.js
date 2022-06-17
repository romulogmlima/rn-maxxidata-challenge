import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PickerContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  padding: 2px 5px;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fonts.sizes.xs}px;
`;
