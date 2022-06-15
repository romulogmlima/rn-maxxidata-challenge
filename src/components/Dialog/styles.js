import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Content = styled.View`
  flex: 1;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  position: absolute;
  bottom: 25px;
`;

export const Message = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
