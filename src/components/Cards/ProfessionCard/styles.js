import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
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
  font-size: 30px;
`;

export const Description = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
`;

export const Badge = styled.View`
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
  border-radius: 10px;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
`;

export const BadgeLabel = styled.Text`
  color: #fff;
  font-size: 12px;
`;
