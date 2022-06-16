import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';

import ProfessionCard from '../../../components/Cards/ProfessionCard';
import Dialog from '../../../components/Dialog';
import SearchBar from '../../../components/SearchBar';
import Wrapper from '../../../components/Wrapper';
import { api } from '../../../services';
import { List, MessageEmptyList } from './styles';

const ListProfessions = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [listProfessions, setListProfessions] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [itemForDelete, setItemForDelete] = useState({});

  useEffect(() => {
    const getProfessions = async () => {
      const response = await api.get('/professions');
      setListProfessions(response);
    };
    getProfessions();
  }, []);

  const filteredListProfessions = useMemo(() => {
    return listProfessions.filter((item) =>
      item.description.toUpperCase().includes(search.toUpperCase())
    );
  }, [listProfessions, search]);

  const deleteProfessionById = async (id) => {
    await api.delete(`/professions/${id}`);
  };

  return (
    <Wrapper>
      <List
        data={filteredListProfessions}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProfessionCard
            item={item}
            onPressDelete={() => {
              setItemForDelete(item);
              setDialogVisible(true);
              setSearch('');
            }}
            onPressEdit={() =>
              navigation.navigate('EditProfession', {
                initialValues: item,
              })
            }
          />
        )}
        ListHeaderComponent={
          <SearchBar
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar por nome"
          />
        }
        ListEmptyComponent={
          <MessageEmptyList>Ops! Nenhum resultado encontrado.</MessageEmptyList>
        }
      />
      <Dialog
        visible={isDialogVisible}
        titleSecondaryButton="Cancelar"
        titlePrimaryButton="Deletar"
        onPressSecondaryButton={() => setDialogVisible(false)}
        onPressPrimaryButton={() => {
          deleteProfessionById(itemForDelete.id);
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default ListProfessions;
