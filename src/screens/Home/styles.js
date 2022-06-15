import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  background-color: #e5e6e7;
  /* align-items: center; */
`;

export const MenuList = styled.FlatList.attrs(() => ({
  columnWrapperStyle: {
    width: '100%',
    justifyContent: 'space-around',
  },
}))``;
