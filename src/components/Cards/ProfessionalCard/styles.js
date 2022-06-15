import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 15px;
  border-left-width: 10px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Badge = styled.View`
  height: 20px;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
  border-radius: 10px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const BadgeLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flex: 6;
`;

export const Label = styled.Text``;

export const ContainerDeleteButton = styled.TouchableOpacity``;

export const ContainerEditButton = styled.TouchableOpacity``;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: 30px;
`;
