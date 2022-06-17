import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 20px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;
