import styled from 'styled-components/native';

export const List = styled.FlatList``;

export const EmptyListMessage = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.m}px;
  text-align: center;
`;
