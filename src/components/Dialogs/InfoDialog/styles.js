import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Content = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.l}px;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 25px;
`;

export const Message = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.xl}px;
  font-weight: bold;
  text-align: center;
`;
