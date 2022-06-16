import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';

import ProfessionalCard from '../../../components/Cards/ProfessionalCard';
import Dialog from '../../../components/Dialog';
import SearchBar from '../../../components/SearchBar';
import Wrapper from '../../../components/Wrapper';
import { api } from '../../../services';
import { List, MessageEmptyList } from './styles';

const ListProfessionals = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [listProfessionals, setListProfessionals] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [itemForDelete, setItemForDelete] = useState({});

  useEffect(() => {
    const getProfessionals = async () => {
      const response = await api.get('/professionals?_expand=profession');
      setListProfessionals(response);
    };

    getProfessionals();
  }, []);

  const filteredListProfessionals = useMemo(() => {
    return listProfessionals.filter((item) =>
      item.fullName.toUpperCase().includes(search.toUpperCase())
    );
  }, [listProfessionals, search]);

  const deleteProfessionalById = async (id) => {
    await api.delete(`/professionals/${id}`);
  };

  return (
    <Wrapper>
      <List
        data={filteredListProfessionals}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
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
          deleteProfessionalById(itemForDelete.id);
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default ListProfessionals;
