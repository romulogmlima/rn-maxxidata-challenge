import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';

import ProfessionalCard from '../../../components/Cards/ProfessionalCard';
import ConfirmDialog from '../../../components/Dialogs/ConfirmDialog';
import SearchBar from '../../../components/Inputs/SearchBar';
import Wrapper from '../../../components/Wrapper';
import useProfessional from '../../../hooks/useProfessional';
import { List, EmptyListMessage } from './styles';

const ListProfessionals = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [itemForDelete, setItemForDelete] = useState({});
  const { findAll, destroy, listProfessionals } = useProfessional();

  useEffect(() => {
    findAll();
  }, []);

  const filteredListProfessionals = useMemo(() => {
    return listProfessionals.filter((item) =>
      item.fullName.toUpperCase().includes(search.toUpperCase())
    );
  }, [listProfessionals, search]);

  const getRenderItem = (item) => (
    <ProfessionalCard
      item={item}
      onPressDelete={() => {
        setItemForDelete(item);
        setDialogVisible(true);
        setSearch('');
      }}
      onPressEdit={() => {
        setSearch('');
        navigation.navigate('EditProfessional', {
          initialValues: item,
        });
      }}
    />
  );

  return (
    <Wrapper>
      <List
        data={filteredListProfessionals}
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

export default ListProfessionals;
