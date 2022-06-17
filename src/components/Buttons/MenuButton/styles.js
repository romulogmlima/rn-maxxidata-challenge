import Feather from '@expo/vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  padding: 15px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled(Feather)`
  font-size: ${({ theme }) => theme.fonts.sizes.xl}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.l}px;
  color: ${({ theme }) => theme.colors.light};
`;
