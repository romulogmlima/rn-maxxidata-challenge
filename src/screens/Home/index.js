import { useNavigation } from '@react-navigation/native';
import React from 'react';

import MenuButton from '../../components/Buttons/MenuButton';
import Wrapper from '../../components/Wrapper';
import { Content, MenuList } from './styles';

const menuItems = [
  {
    id: 1,
    title: 'Adicionar Profissional',
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
    title: 'Adicionar Profissão',
    icon: 'user-plus',
    navigateTo: 'ListProfessionals',
  },
  {
    id: 4,
    title: 'Listar Profissões',
    icon: 'list',
    navigateTo: 'ListProfessionals',
  },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Content>
        <MenuList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MenuButton
              {...item}
              onPress={() => navigation.navigate(item.navigateTo)}
            />
          )}
          numColumns={2}
        />
      </Content>
    </Wrapper>
  );
};

export default Home;
