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
    key: 1,
    title: 'Cadastrar profissional',
    icon: 'user-plus',
    navigateTo: 'RegisterProfessional',
  },
  {
    key: 2,
    title: 'Listar profissionais',
    icon: 'list',
    navigateTo: 'ListProfessionals',
  },
  {
    key: 3,
    title: 'Cadastrar profissão',
    icon: 'user-plus',
    navigateTo: 'RegisterProfession',
  },
  {
    key: 4,
    title: 'Listar profissões',
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
          {menuItems.map((item) => (
            <MenuButton
              {...item}
              onPress={() => navigation.navigate(item.navigateTo)}
            />
          ))}
        </MenuContainer>
      </Content>
    </Wrapper>
  );
};

export default Home;
