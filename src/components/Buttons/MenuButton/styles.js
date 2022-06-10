import Feather from '@expo/vector-icons/Feather';
import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 40%;
  height: 120px;
  border-radius: 15px;
  background-color: #fff;
  margin-bottom: 20px;
  justify-content: space-between;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: '#000000';
`;

export const Icon = styled(Feather)`
  font-size: 30px;
`;
