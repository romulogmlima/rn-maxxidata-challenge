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
    params: {
      initialValues: {
        fullName: '',
        phoneNumber: '',
        email: '',
        professionId: '',
        status: true,
      },
    },
  },
  {
    id: 2,
    title: 'Listar Profissionais',
    icon: 'list',
    navigateTo: 'ListProfessionals',
    params: null,
  },
  {
    id: 3,
    title: 'Adicionar Profissão',
    icon: 'user-plus',
    navigateTo: 'RegisterProfession',
    params: {
      initialValues: {
        description: '',
        status: true,
      },
    },
  },
  {
    id: 4,
    title: 'Listar Profissões',
    icon: 'list',
    navigateTo: 'ListProfessions',
    params: null,
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
              onPress={() => navigation.navigate(item.navigateTo, item.params)}
            />
          )}
          numColumns={2}
        />
      </Content>
    </Wrapper>
  );
};

export default Home;
