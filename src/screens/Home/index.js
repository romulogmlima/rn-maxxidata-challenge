import React from 'react';

import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';
import { Content, MenuList } from './styles';

const menuItems = [
  {
    id: 1,
    title: 'Adicionar Profissional',
    icon: 'user-plus',
  },
  {
    id: 2,
    title: 'Listar Profissionais',
    icon: 'list',
  },
  {
    id: 3,
    title: 'Adicionar Profissão',
    icon: 'user-plus',
  },
  {
    id: 4,
    title: 'Listar Profissões',
    icon: 'list',
  },
];

const Home = () => (
  <Wrapper>
    <Content>
      <MenuList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card {...item} onPress={() => console.log(item.title)} />
        )}
        numColumns={2}
      />
    </Content>
  </Wrapper>
);

export default Home;
