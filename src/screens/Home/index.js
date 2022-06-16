import { useNavigation } from '@react-navigation/native';
import React from 'react';

import MenuButton from '../../components/Buttons/MenuButton';
import Wrapper from '../../components/Wrapper';
import {
  Content,
  GreetingContainer,
  MenuContainer,
  SubTitle,
  Title,
} from './styles';

const menuItems = [
  {
    id: 1,
    title: 'Cadastrar Profissional',
    icon: 'user-plus',
    navigateTo: 'RegisterProfessional',
  },
  {
    id: 2,
    title: 'Listar Profissionais',
    icon: 'list',
    navigateTo: 'ListProfessionals',
  },
  {
    id: 3,
    title: 'Cadastrar Profissão',
    icon: 'user-plus',
    navigateTo: 'RegisterProfession',
  },
  {
    id: 4,
    title: 'Listar Profissões',
    icon: 'list',
    navigateTo: 'ListProfessions',
  },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Content>
        <GreetingContainer>
          <Title>Olá, Rômulo!</Title>
          <SubTitle>O que você deseja fazer?</SubTitle>
        </GreetingContainer>
        <MenuContainer>
          {menuItems.map((item) => {
            return (
              <MenuButton
                key={item.id}
                onPress={() => navigation.navigate(item.navigateTo)}
                {...item}
              />
            );
          })}
        </MenuContainer>
      </Content>
    </Wrapper>
  );
};

export default Home;
