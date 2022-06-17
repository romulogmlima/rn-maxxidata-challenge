import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';

import ProfessionCard from '../../../components/Cards/ProfessionCard';
import ConfirmDialog from '../../../components/Dialogs/ConfirmDialog';
import SearchBar from '../../../components/Inputs/SearchBar';
import Wrapper from '../../../components/Wrapper';
import useProfession from '../../../hooks/useProfession';
import { List, EmptyListMessage } from './styles';

const ListProfessions = () => {
  const { findAll, destroy, listProfessions } = useProfession();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [itemForDelete, setItemForDelete] = useState({});

  useEffect(() => {
    findAll();
  }, []);

  const filteredListProfessions = useMemo(() => {
    return listProfessions.filter((item) =>
      item.description.toUpperCase().includes(search.toUpperCase())
    );
  }, [listProfessions, search]);

  const getRenderItem = (item) => (
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
  );

  return (
    <Wrapper>
      <List
        data={filteredListProfessions}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => getRenderItem(item)}
        ListHeaderComponent={
          <SearchBar
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar por nome"
          />
        }
        ListEmptyComponent={
          <EmptyListMessage>Ops! Nenhum resultado encontrado.</EmptyListMessage>
        }
      />
      <ConfirmDialog
        visible={isDialogVisible}
        message={`Deseja deletar o\n registro?`}
        titleSecondaryButton="Cancelar"
        titlePrimaryButton="Deletar"
        onPressSecondaryButton={() => setDialogVisible(false)}
        onPressPrimaryButton={() => {
          destroy(itemForDelete.id);
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default ListProfessions;
