import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabled : theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 25,
  color: theme.colors.light,
}))``;
