import styled from 'styled-components/native';

export const Content = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  width: 100%;
`;

export const GreetingContainer = styled.View`
  width: 100%;
  padding: 30px 0 30px;
`;

export const MenuContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 22px;
`;
