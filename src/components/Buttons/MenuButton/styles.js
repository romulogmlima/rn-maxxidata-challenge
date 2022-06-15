import Feather from '@expo/vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 40%;
  height: 120px;
  border-radius: 15px;
  background-color: #492b7c;
  margin-bottom: 20px;
  justify-content: space-between;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

export const Icon = styled(Feather)`
  font-size: 30px;
  color: #ffffff;
`;
