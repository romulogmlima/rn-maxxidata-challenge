import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.light};
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerActions = styled.View`
  flex-direction: row;
`;

export const ContainerDeleteButton = styled.TouchableOpacity``;

export const ContainerEditButton = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${({ theme }) => theme.fonts.sizes.xl}px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.l}px;
  font-weight: bold;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
`;

export const Badge = styled.View`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.success : theme.colors.error};
  border-radius: 10px;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
`;

export const BadgeLabel = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fonts.sizes.xs}px;
`;
