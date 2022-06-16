import Feather from '@expo/vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  /* border-radius: 15px; */
  margin-bottom: 20px;
  padding: 20px;
  justify-content: space-between;
  background-color: #232840;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #ffffff;
`;

export const Icon = styled(Feather)`
  font-size: 30px;
  color: #ffb726;
`;
