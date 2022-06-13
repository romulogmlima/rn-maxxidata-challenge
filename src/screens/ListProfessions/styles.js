import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const List = styled.FlatList``;

export const ContainerButtonsDialog = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  background-color: red;
  border-radius: 10px;
`;

export const PrimaryButtonTitle = styled.Text``;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: green;
  margin-left: 0;
`;

export const SecondaryButtonTitle = styled.Text``;
