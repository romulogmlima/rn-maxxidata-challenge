import React, { useMemo, useState } from 'react';

import ProfessionCard from '../../components/Cards/ProfessionCard';
import SearchBar from '../../components/SearchBar';
import Wrapper from '../../components/Wrapper';
import data from '../../mocks/professions';
import { Content, List } from './styles';

const ListProfessions = () => {
  const [search, setSearch] = useState('');
  const [listProfessions, setListProfessions] = useState(data);

  const filteredListProfessions = useMemo(() => {
    return listProfessions.filter((item) =>
      item.descricao.toUpperCase().includes(search.toUpperCase())
    );
  }, [listProfessions, search]);

  return (
    <Wrapper>
      <Content>
        <List
          data={filteredListProfessions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProfessionCard item={item} />}
          ListHeaderComponent={
            <SearchBar
              value={search}
              onChangeText={setSearch}
              placeholder="Buscar por nome"
            />
          }
        />
      </Content>
    </Wrapper>
  );
};

export default ListProfessions;
