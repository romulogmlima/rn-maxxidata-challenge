import { FontAwesome } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  padding: 15px;
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

export const ContainerInfos = styled.View`
  flex: 6;
`;

export const ContainerActions = styled.View`
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const Profession = styled.Text`
  font-size: 16px;
  color: #898a8a;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #898a8a;
  margin: 4px 0px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  //justify-content: space-evenly;
  //padding: 10px;
  margin-top: 20px;
`;

export const ContactInformationContainer = styled.View``;

export const ContainerDeleteButton = styled.TouchableOpacity``;

export const ContainerEditButton = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const TitleButton = styled.Text`
  font-size: 15px;
`;

export const UserIcon = styled(FontAwesome)`
  font-size: 50px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: 30px;
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
