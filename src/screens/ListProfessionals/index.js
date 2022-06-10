import React, { useMemo, useState } from 'react';

import ProfessionalCard from '../../components/Cards/ProfessionalCard';
import SearchBar from '../../components/SearchBar';
import Wrapper from '../../components/Wrapper';
import data from '../../mocks/professionals';
import { Content, List } from './styles';

const ListProfessionals = () => {
  const [search, setSearch] = useState('');
  const [listProfessionals, setListProfessionals] = useState(data);

  const filteredListProfessionals = useMemo(() => {
    return listProfessionals.filter((item) =>
      item.nome.toUpperCase().includes(search.toUpperCase())
    );
  }, [listProfessionals, search]);

  return (
    <Wrapper>
      <Content>
        <List
          data={filteredListProfessionals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProfessionalCard item={item} />}
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

export default ListProfessionals;
