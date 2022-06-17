import styled from 'styled-components/native';

export const Content = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  width: 100%;
`;

export const GreetingContainer = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s}px 0
    ${({ theme }) => theme.spacing.xl}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.xl}px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.l}px;
`;

export const MenuContainer = styled.View`
  flex: 1;
  width: 100%;
`;
