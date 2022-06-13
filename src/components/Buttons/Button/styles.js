import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ disabled }) => (disabled ? '#C7C7C7' : '#ff0000')};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export const CustomActivityIndicator = styled.ActivityIndicator.attrs(() => ({
  size: 25,
  color: '#ffffff',
}))``;
