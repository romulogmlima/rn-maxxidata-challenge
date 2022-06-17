import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.s}px;
  background-color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInfos = styled.View`
  flex: 6;
`;

export const ContainerActions = styled.View`
  flex-direction: row;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.l}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Profession = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.s}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.s}px;
`;

export const ContactInformationContainer = styled.View``;

export const ContainerDeleteButton = styled.TouchableOpacity``;

export const ContainerEditButton = styled.TouchableOpacity`
  margin-right: ${({ theme }) => theme.spacing.s}px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${({ theme }) => theme.fonts.sizes.xl}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Badge = styled.View`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.success : theme.colors.error};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.xxs}px
    ${({ theme }) => theme.spacing.xs}px;
  justify-content: center;
  align-items: center;
`;

export const BadgeLabel = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fonts.sizes.xs}px;
`;
